import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import Router from "./source/Router";

export default function App() {
  return (
    <RootSiblingParent>
      <Router />
    </RootSiblingParent>
  );
}
