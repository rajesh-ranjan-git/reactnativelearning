import { Text, View } from "react-native";
import tw from "twrnc";

export default function Index() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-neutral-800`}>
      <Text style={tw`text-white text-2xl`}>Testing notifications</Text>
    </View>
  );
}
