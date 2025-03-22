import { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Button,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import * as Updates from "expo-updates";
import * as Notifications from "expo-notifications";
import {
  checkForUpdates,
  registerForPushNotificationsAsync,
  schedulePushNotification,
} from "./onLoadUtils";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Index() {
  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
    []
  );
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const [notificationTitle, setNotificationTitle] = useState<string>("");
  const [notificationBody, setNotificationBody] = useState<string>("");
  const [notificationTime, setNotificationTime] = useState<string>("");
  const notificationListener = useRef<Notifications.EventSubscription>();
  const responseListener = useRef<Notifications.EventSubscription>();

  // Show whether or not we are running embedded code or run the update
  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? "This app is running from built-in code"
    : "This app is running from an update";

  useEffect(() => {
    checkForUpdates();
    registerForPushNotificationsAsync().then(
      (token) => token && setExpoPushToken(token)
    );

    if (Platform.OS === "android") {
      Notifications.getNotificationChannelsAsync().then((value) =>
        setChannels(value ?? [])
      );
    }
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    console.log("notificationTitle : ", notificationTitle);
    console.log("notificationBody : ", notificationBody);
    console.log("notificationTime : ", notificationTime);
  }, [notificationTitle, notificationBody, notificationTime]);

  return (
    <ScrollView>
      <View
        style={tw`flex-1 gap-5 justify-center items-center bg-yellow-400 p-2 m-2 rounded`}
      >
        <Text style={tw`m-2 text-2xl font-bold`}>Notifications testing</Text>
        <Text style={tw`text-lg`}>Your expo push token</Text>
        <Text style={tw`text-lg`}>{expoPushToken}</Text>
      </View>

      <View
        style={tw`flex-1 gap-5 justify-center items-center bg-yellow-400 py-4 m-2 rounded`}
      >
        <TextInput
          style={tw`w-[90%] border-1 px-4 bg-white rounded`}
          placeholder="Enter notification title..."
          value={notificationTitle}
          onChange={(e) => setNotificationTitle(e.nativeEvent.text)}
        />
        <TextInput
          style={tw`w-[90%] border-1 px-4 bg-white rounded`}
          placeholder="Enter notification time..."
          value={notificationBody}
          onChange={(e) => setNotificationBody(e.nativeEvent.text)}
        />
        <TextInput
          style={tw`w-[90%] border-1 px-4 bg-white rounded`}
          placeholder="Enter notification time..."
          value={notificationTime}
          onChange={(e) => setNotificationTime(e.nativeEvent.text)}
        />
        <TouchableOpacity
          style={tw`w-[90%] rounded h-10 border-1 px-2 py-1 bg-blue-400 active:bg-red-600 flex-1 justify-center items-center`}
          onPress={() =>
            schedulePushNotification({
              title: notificationTitle,
              body: notificationBody,
              time: notificationTime,
            })
          }
        >
          <Text style={tw`text-white text-lg`}>Send Notification</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
