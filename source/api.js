import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
export const getQuestions = async () => {
  const result = await axios.get(url);
  return result.data;
};
