import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SolarSystem />
      </Fragment>
    );
  }
}

export default App;
