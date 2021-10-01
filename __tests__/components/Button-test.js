import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { Button } from "../../source/components";

afterEach(cleanup);
jest.useFakeTimers();

describe("<Button /> tests", () => {
  it("should fire onPress when clicked", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Login" onPress={onPressMock} />
    );

    fireEvent.press(getByText("Login"));
    expect(onPressMock).toHaveBeenCalledTimes(1);

    fireEvent.press(getByText("Login"));
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });

  it("disabled button should not fire onPress", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Login" onPress={onPressMock} disabled />
    );

    fireEvent.press(getByText("Login"));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
