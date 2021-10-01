import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { ResultView } from "../../source/components";

afterEach(cleanup);
jest.useFakeTimers();

describe("ResultView Component test", () => {
  const fakeQuestion = {
    question: "Is blue a colour",
  };
  it("renders a failed question if correct prop is absent", () => {
    const { getByTestId, queryByText } = render(
      <ResultView question={fakeQuestion} />
    );

    expect(queryByText("correct")).not.toBeTruthy();
    expect(getByTestId("question")).toBeTruthy();
  });

  it("renders no question if question property is not provided", () => {
    const { queryByText } = render(<ResultView />);

    expect(queryByText("question")).not.toBeTruthy();
  });
});
