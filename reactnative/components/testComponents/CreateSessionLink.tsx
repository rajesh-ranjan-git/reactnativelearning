import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const CreateSessionLink = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("Button pressed!")}>
        <Text style={styles.link}>Create session</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    backgroundColor: "white",
    color: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 18,
  },
});

export default CreateSessionLink;
