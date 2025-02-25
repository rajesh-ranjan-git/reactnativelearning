import { Image, StyleSheet, Platform, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import tw from "twrnc";
import { HtmlRenderer } from "@/libs/htmlRender";
import { findBuddyPgData } from "@/libs/buddyData";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <View
        style={tw`flex-1 justify-center items-center bg-white p-4 rounded-lg text-xl`}
      >
        <Text style={tw`text-xl`}>
          This is a React Native learning repository!
        </Text>
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-bold mb-2 text-white`}>
          <HtmlRenderer
            htmlContent={`<p style="color: #fff">${findBuddyPgData.expertiseLevel.label}</p>`}
          />
          <HtmlRenderer
            htmlContent={`<p style="color: #fff">${findBuddyPgData.participantsPreferences.label}</p>`}
          />
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
