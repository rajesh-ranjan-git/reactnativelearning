import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Linking from "expo-linking";
import { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState(null);

  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);

  function handleDeepLink(event) {
    let data = Linking.parse(event.url);

    console.log("data : ", data);

    setData(data);
  }

  useEffect(() => {
    async function getInitialURL() {
      const initialURL = await Linking.getInitialURL();

      console.log("initialURL : ", initialURL);
      console.log("initialURL : ", initialURL);
      console.log(
        `Linking.parse("initialURL") : `,
        Linking.parse("initialURL")
      );

      if (initialURL) setData(Linking.parse("initialURL"));
    }

    Linking.addEventListener("url", handleDeepLink);

    if (!data) {
      getInitialURL();
    }
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
        {data
          ? JSON.stringify(data)
          : "App not opened from deep link, I guess deep linking is not working at all."}
      </Text>

      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ color: "white", fontSize: 20 }}>Press Here</Text>
      </TouchableOpacity>

      <Text>This button is for deep link.</Text>
      <TouchableOpacity style={styles.button} onPress={handleDeepLink}>
        <Text style={{ color: "white", fontSize: 20 }}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    width: 200,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
