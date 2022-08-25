import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SolarSystem />
        <Missions />
      </Fragment>
    );
  }
}

export default App;
