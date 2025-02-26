import React, { useState } from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = () => {};
  ``;

  return (
    <View style={tw`min-w-58`}>
      <TextInput
        style={tw`bg-white border border-gray-300 p-3 ml-6 pl-5 rounded-2xl`}
        value={query}
        onChange={handleSearchChange}
        onChangeText={setQuery}
        placeholder="Search..."
      />
    </View>
  );
};

export default SearchBox;
