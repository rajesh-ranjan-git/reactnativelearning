import { Alert, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import * as Updates from "expo-updates";
import { useEffect, useState } from "react";
import { checkForUpdates } from "./onLoadUtils";
import { PermissionsAndroid } from "react-native";
import messaging from "@react-native-firebase/messaging";

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});

export default function Index() {
  const [fcmTokenToShow, setFcmTokenToShow] = useState("");
  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates();

  // Show whether or not we are running embedded code or run the update
  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? "This app is running from built-in code"
    : "This app is running from an update";

  const requestPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Notification permission granted");
        Alert.alert("Notification permission granted");
        getToken();
      } else {
        console.log("Notification permission denied");
        Alert.alert("Notification permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log("FCM token:", fcmToken);
    setFcmTokenToShow(fcmToken);
  };

  useEffect(() => {
    checkForUpdates();
    requestPermissionAndroid();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View style={tw`flex-1 gap-5 justify-center items-center bg-yellow-400`}>
      <Text>EAS OTA Update testing.</Text>
      <Text style={tw`text-red-500 text-xl`}>
        This is a new text after updates.
      </Text>
      <Text style={tw`text-red-500 text-2xl`}>
        Now I am testing notifications.
      </Text>
      <Text style={tw`text-red-500 text-2xl`}>Firebase setup done</Text>
      <Text style={tw`text-red-500 text-2xl`}>
        FCM Token : {fcmTokenToShow}
      </Text>

      <Text style={tw`text-white text-xl`}>{runTypeMessage}</Text>
    </View>
  );
}
