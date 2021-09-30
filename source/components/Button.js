import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { RegularText } from "./Text";

export const Button = ({ dark, onPress, style, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, dark && styles.dark, style]}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <RegularText
        title={title}
        style={[styles.title, dark && styles.darkTitle]}
      />
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
  dark: {
    backgroundColor: "#000",
  },
  title: {
    color: "#000",
  },
  darkTitle: {
    color: "#FFF",
  },
});
