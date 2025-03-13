import { Text, TouchableOpacity, View, Share } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import branch from "react-native-branch";

export default function Index() {
  return (
    <View style={tw`flex-1 justify-center items-center px-4`}>
      <Text style={tw`text-xl mb-4`}>Your Referral Code: Referral Code</Text>

      <TouchableOpacity
        style={tw`bg-blue-500 rounded-lg p-3 w-52 items-center`}
      >
        <Text style={tw`text-white text-xl`}>Share App</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-blue-500 rounded-lg p-3 w-52 items-center mt-4`}
      >
        <Text style={tw`text-white text-xl`}>Generate New Code</Text>
      </TouchableOpacity>
    </View>
  );
}
