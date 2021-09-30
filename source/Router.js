import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="home" component={} initial />
      <Scene key="quiz" component={} />
      <Scene key="results" component={} />
    </Scene>
  </Router>
)
export default RouterComponent;
