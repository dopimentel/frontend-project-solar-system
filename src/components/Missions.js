import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
