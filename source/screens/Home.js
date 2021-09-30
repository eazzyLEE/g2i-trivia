import React from "react";
import { View } from "react-native";
import { Button, HeaderText, RegularText } from "../components";
import { home as styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.background}>
      <HeaderText
        title="Welcome to the Trivia challenge!"
        style={styles.header}
      />
      <RegularText
        title="You will be presented with 10 True or False questions."
        style={styles.instruction}
      />
      <RegularText title="Can you score 100%?" style={styles.score} />

      <Button title="BEGIN" style={styles.begin} />
    </View>
  );
};

export default Home;
