import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import tw from "twrnc";

// Define prop types interface
interface IconButtonProps {
  onPress: () => void;
  disabled?: boolean;
  imageSource: ImageSourcePropType;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  disabled = false,
  imageSource,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabledButton]}
    >
      <ImageBackground
        source={imageSource}
        style={styles.imageBackground}
        imageStyle={styles.icon}
      />
    </TouchableOpacity>
  );
};

// Separate styles into logical groups
const styles = StyleSheet.create({
  // Button styles
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 8,
    marginRight: 15,
  },
  disabledButton: {
    opacity: 0.5,
  },

  // Image styles
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
  },
  icon: {
    resizeMode: "cover",
  },
});

export default IconButton;
