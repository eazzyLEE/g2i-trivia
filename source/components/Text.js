import React from "react";
import { StyleSheet, Text } from "react-native";

export const HeaderText = ({ style, title }) => (
  <Text style={[styles.headerText, style]}>{title}</Text>
);

export const RegularText = ({ style, title }) => (
  <Text style={[styles.regularText, style]}>{title}</Text>
);

export const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  regularText: {
    fontSize: 14,
  },
});
