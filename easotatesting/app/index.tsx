import { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
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
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notificationTitle, setNotificationTitle] = useState<string>("");
  const [notificationBody, setNotificationBody] = useState<string>("");
  const notificationListener = useRef<Notifications.EventSubscription>();
  const responseListener = useRef<Notifications.EventSubscription>();

  useEffect(() => {
    checkForUpdates();
    registerForPushNotificationsAsync().then(
      (token) => token && setExpoPushToken(token)
    );

    if (Platform.OS === "android") {
      Notifications.getNotificationChannelsAsync();
    }

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
          style={tw`w-[90%] border-1 px-4 py-2 bg-white rounded`}
          placeholder="Enter notification title..."
          value={notificationTitle}
          onChange={(e) => setNotificationTitle(e.nativeEvent.text)}
        />
        <TextInput
          style={tw`w-[90%] border-1 px-4 py-2 bg-white rounded`}
          placeholder="Enter notification body..."
          value={notificationBody}
          onChange={(e) => setNotificationBody(e.nativeEvent.text)}
        />
        <Text style={tw`text-lg text-white font-semibold`}>
          Press button to get notification
        </Text>
        <TouchableOpacity
          style={tw`w-[90%] rounded h-10 border-1 px-2 py-1 bg-blue-400 active:bg-red-600 flex-1 justify-center items-center`}
          onPress={() =>
            schedulePushNotification({
              title: notificationTitle,
              body: notificationBody,
            })
          }
        >
          <Text style={tw`text-white text-lg`}>Send Notification</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
