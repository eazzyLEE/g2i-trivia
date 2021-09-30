import { StyleSheet } from "react-native";

export const home = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginTop: 14,
  },
  instruction: {
    marginTop: "50%",
    width: 210,
    lineHeight: 25,
    textAlign: "center",
  },
  score: {
    marginTop: "40%",
  },
  begin: {
    position: "absolute",
    bottom: 40,
  },
});

export const quiz = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginTop: 14,
  },
  quizBox: {
    marginTop: "30%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000",
    paddingHorizontal: 20,
    maxWidth: "80%",
    minHeight: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    textAlign: "center",
  },
  buttonGrid: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
    marginTop: "20%",
  },
  pageView: {
    position: "absolute",
    bottom: 40,
  },
});
