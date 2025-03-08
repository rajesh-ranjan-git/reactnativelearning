import { Text, View } from "react-native";
import * as Linking from "expo-linking";
import { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState(null);

  const handleDeepLink = (event) => {
    let data = Linking.parse(event.url);
    setData(data);
  };

  useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);
    return () => {
      // Linking.removeEventListener("url");
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Lets learn deep linking.</Text>
      <Text>
        {data ? JSON.stringify(data) : "App not opened from deep link"}
      </Text>
    </View>
  );
}
