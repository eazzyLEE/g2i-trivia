import React from "react";
import { StyleSheet, View } from "react-native";
import { decode } from "html-entities";
import { RegularText } from ".";
import { HeaderText } from "./Text";

export const ResultView = ({ correct, question }) => (
  <>
    <View style={styles.view}>
      <HeaderText title={correct ? "+" : "-"} style={styles.sign} />
      <View testID="question">
        <RegularText
          title={decode(question?.question) || ""}
          style={[styles.question, !correct && styles.wrong]}
        />
      </View>
    </View>
    <View style={styles.divider} />
  </>
);

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  sign: {
    fontSize: 20,
  },
  question: {
    width: 320,
    marginLeft: 15,
    lineHeight: 20,
  },
  wrong: {
    color: "red",
  },
  divider: {
    backgroundColor: "#000",
    height: 1,
    width: 335,
    marginTop: 5,
    marginBottom: 14,
  },
});
