import React from "react";
import { View, StyleSheet } from "react-native";
import tw from "twrnc";
import IconButton from "./DayNightButton";

const DayNightButtons = ({ selectedTime = "Day" }) => {
  return (
    <View style={styles.container}>
      {/* Day Button */}
      <IconButton
        onPress={() => console.log("DayNight Button clicked!")}
        // style={[
        //   styles.iconButton,
        //   selectedTime === "day" && styles.disabledButton,
        //   tw`mb-6`,
        // ]}
        // imageSource={require("../../../assets/images/day.png")}
        imageSource={require("@/assets/images/day.png")}
      />

      {/* Night Button */}
      <IconButton
        onPress={() => console.log("DayNight Button clicked!")}
        // style={[
        //   styles.iconButton,
        //   selectedTime === "night" && styles.disabledButton,
        //   tw`mb-6`,
        // ]}
        // imageSource={require("../../../assets/images/night.png")}
        imageSource={require("@/assets/images/night.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 50,
    opacity: 1,
  },
  disabledButton: {
    opacity: 0.3,
  },
});

export default DayNightButtons;
