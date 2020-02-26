import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ToggleRandomPlanet from '../toggleRandomPlanet/toggleRandomPlanet';
import ErrorButton from '../errorButton/errorButton';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import PeoplePage from '../pages/peoplePage/peoplePage';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';
import SwapiService from '../../services/swapiService';

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  onTogglePlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className='m-auto' style={{ width: '90%' }}>
        <Header />
        {randomPlanet}
        <div className='container-fluid mb-2 button-row'>
          <div className='row'>
            <ToggleRandomPlanet onTogglePlanet={this.onTogglePlanet} />
            <ErrorButton />
          </div>
        </div>
        <PeoplePage />

        <div className='container-fluid'>
          <div className='row'>
            <ItemList
              getData={this.swapiService.Get.All.planets}
              onItemSelected={this.onItemSelected}
              renderItem={({ name, diameter }) =>
                `${name} (diameter: ${diameter})`
              }
            />
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
