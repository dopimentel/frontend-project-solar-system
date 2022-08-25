import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => {
          const { name, image } = planet;
          return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
        })}
      </div>
    );
  }
}

export default SolarSystem;
