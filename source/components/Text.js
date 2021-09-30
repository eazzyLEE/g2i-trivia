import React from "react";
import { StyleSheet, Text } from "react-native";

export const HeaderText = ({ title }) => (
  <Text style={styles.headerText}>{title}</Text>
);

export const RegularText = ({ title }) => (
  <Text style={styles.regularText}>{title}</Text>
);

export const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  regularText: {
    fontSize: 14,
  },
});
