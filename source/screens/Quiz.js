import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { decode } from "html-entities";
import { getQuestions } from "../api";
import { Button, HeaderText, Placeholder, RegularText } from "../components";
import { quiz as styles } from "./styles";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scene, setScene] = useState(1);
  const [correctCount, setCount] = useState(0);
  const pages = questions?.length || 1;
  const currentQuestion = questions?.[scene - 1];

  useEffect(() => {
    setLoading(true);
    getQuestions()
      .then((response) => setQuestions(response.results))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    const newScene = scene + 1;
    let count = correctCount;
    newAnswers.push(answer);
    setAnswers(newAnswers);
    if (currentQuestion.correct_answer === answer) {
      count++;
      setCount(count);
    }
    if (scene === pages) {
      Actions.results({
        type: "reset",
        data: { answers: newAnswers, questions, correctCount: count },
      });
    } else {
      setScene(newScene);
    }
  };

  return (
    <View style={styles.background}>
      <HeaderText title={currentQuestion?.category} style={styles.header} />

      {loading ? (
        <Placeholder />
      ) : (
        <View style={{ alignItems: "center" }}>
          <View style={styles.quizBox}>
            <RegularText
              title={decode(currentQuestion?.question)}
              style={styles.question}
            />
          </View>

          <View style={styles.buttonGrid}>
            <Button title="TRUE" dark onPress={() => handleAnswer("True")} />
            <Button title="FALSE" onPress={() => handleAnswer("False")} />
          </View>
        </View>
      )}

      <View style={styles.pageView}>
        <RegularText title={`Page ${scene} of ${pages}`} />
      </View>
    </View>
  );
};

export default Quiz;
