import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { RegularText } from ".";

export const Button = ({ onPress, style, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <RegularText title={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    paddingHorizontal: 30,
  },
});
