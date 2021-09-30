import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { HeaderText } from "./components";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="home" component={Home} initial />
      <Scene key="quiz" component={Quiz} />
      <Scene key="results" component={Results} />
    </Scene>
  </Router>
);
export default RouterComponent;
