import { Alert, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import * as Updates from "expo-updates";
import { useEffect } from "react";
import { checkForUpdates } from "./onLoadUtils";
import { PermissionsAndroid } from "react-native";

export default function Index() {
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
      } else {
        console.log("Notification permission denied");
        Alert.alert("Notification permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    checkForUpdates();
    requestPermissionAndroid();
  }, []);

  return (
    <View style={tw`flex-1 gap-5 justify-center items-center bg-yellow-400`}>
      <Text>EAS OTA Update testing.</Text>
      <Text style={tw`text-red-500 text-xl`}>
        This is a new text after updates.
      </Text>
      <Text style={tw`text-red-500 text-2xl`}>
        Now I am testing notifications again.
      </Text>

      <Text style={tw`text-red-500 text-xl`}>
        This is after a another new update.
      </Text>

      <Text style={tw`text-white text-xl`}>{runTypeMessage}</Text>
    </View>
  );
}
