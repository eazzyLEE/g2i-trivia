import React from "react";
import { View } from "react-native";
import { Button, HeaderText, RegularText } from "../components";
import { quiz as styles } from "./styles";

const Quiz = () => {
  return (
    <View style={styles.background}>
      <HeaderText title="Entertainment: Video Games" style={styles.header} />

      <View style={styles.quizBox}>
        <RegularText
          title="Unturned casually started as a Roblox game?"
          style={styles.question}
        />
      </View>

      <View style={styles.buttonGrid}>
        <Button title="TRUE" dark />
        <Button title="FALSE" />
      </View>

      <View style={styles.pageView}>
        <RegularText title="Page 1 of 10" />
      </View>
    </View>
  );
};

export default Quiz;
