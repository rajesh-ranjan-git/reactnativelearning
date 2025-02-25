import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";

export const HtmlRenderer = ({
  renderersProps = {},
  htmlContent,
  containerStyle = {},
  key = "",
}) => {
  const { width } = useWindowDimensions();
  return (
    <View style={containerStyle} key={key}>
      <HTML
        contentWidth={width}
        source={{ html: htmlContent }}
        renderersProps={renderersProps}
      />
    </View>
  );
};
