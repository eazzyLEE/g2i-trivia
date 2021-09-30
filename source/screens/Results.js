import React from "react";
import { ScrollView, View } from "react-native";
import { Button, HeaderText, RegularText } from "../components";
import { results as styles } from "./styles";

const Results = () => {
  return (
    <View style={styles.background}>
      <HeaderText title={"You scored \n 3/10"} style={styles.header} />

      <View style={styles.resultsBox}>
        <ScrollView>
          {new Array(20).fill(2).map(() => (
            <RegularText
              title="Unturned casually started as a Roblox game?"
              style={styles.question}
            />
          ))}
        </ScrollView>
      </View>

      <Button
        title="PLAY AGAIN"
        style={styles.begin}
        // onPress={() => Actions.quiz()}
      />
    </View>
  );
};

export default Results;
