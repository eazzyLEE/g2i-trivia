import React from "react";
import { ScrollView, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, HeaderText, RegularText, ResultView } from "../components";
import { results as styles } from "./styles";

const Results = ({ data }) => {
  const { answers, correctCount, questions } = data;

  return (
    <View style={styles.background}>
      <HeaderText
        title={`You scored \n ${correctCount}/10`}
        style={styles.header}
      />

      <View style={styles.resultsBox}>
        <ScrollView>
          {questions.map((question, index) => {
            const correct = question.correct_answer === answers[index];
            return <ResultView correct={correct} question={question} />;
          })}
        </ScrollView>
      </View>

      <Button
        title="PLAY AGAIN"
        style={styles.begin}
        onPress={() => Actions.home({ type: "reset" })}
      />
    </View>
  );
};

export default Results;
