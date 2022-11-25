import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
