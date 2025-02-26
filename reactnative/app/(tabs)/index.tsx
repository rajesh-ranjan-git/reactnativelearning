import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import tw from "twrnc";
import { HtmlRenderer } from "@/libs/htmlRender";
import { findBuddyPgData } from "@/libs/buddyData";
import CreateSessionLink from "@/components/testComponents/CreateSessionLink";
import SearchBox from "@/components/testComponents/Searchbox";
import DayNightButtons from "@/components/testComponents/DayNightButtons";

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>

    //   <View
    //     style={tw`flex-1 justify-center items-center bg-white p-4 rounded-lg text-xl`}
    //   >
    //     <Text style={tw`text-xl`}>
    //       This is a React Native learning repository!
    //     </Text>
    //   </View>

    //   {/* <View style={tw`p-4`}>
    //     <Text style={tw`text-lg font-bold mb-2 text-white`}>
    //       <HtmlRenderer
    //         htmlContent={`<p style="color: #fff">${findBuddyPgData.expertiseLevel.label}</p>`}
    //       />
    //       <HtmlRenderer
    //         htmlContent={`<p style="color: #fff">${findBuddyPgData.participantsPreferences.label}</p>`}
    //       />
    //     </Text>
    //   </View> */}
    // </ParallaxScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={[styles.title, tw`ml-4 flex-1 items-center justify-center`]}
          >
            Book a session
          </Text>
          <CreateSessionLink />
        </View>
      </View>

      <View style={[styles.header, tw`br-20`]}>
        <SearchBox style={tw`br-20`} />
        <DayNightButtons />
      </View>
    </SafeAreaView>
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
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 16,
  },
  responseMessage: {
    color: "green",
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },
  sessionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sessionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
