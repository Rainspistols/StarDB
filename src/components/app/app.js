import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ToggleRandomPlanet from '../toggleRandomPlanet/toggleRandomPlanet';
import ErrorButton from '../errorButton/errorButton';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import PeoplePage from '../pages/peoplePage/peoplePage';
import SwapiService from '../../services/swapiService';
import ItemDetails, { Record } from '../itemDetails/itemDetails';
import ErrorBoundry from '../errorBoundry/errorBoundry';
import ItemDetialsViewRow from '../itemDetails/itemDetialsViewRow/itemDetialsViewRow';
import Row from '../layout/row/row';

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

    const {
      Get: { person, starship },
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails getData={person} itemId={11} getImageUrl={getPersonImage}>
        <ItemDetialsViewRow field='gender' label='Gender' />
        <ItemDetialsViewRow field='eyeColor' label='Eye Color' />
        <ItemDetialsViewRow field='birthYear' label='Birth Year' />
      </ItemDetails>
    );
    const startShipDetails = (
      <ItemDetails getData={starship} itemId={5} getImageUrl={getStarshipImage}>
        <ItemDetialsViewRow field='crew' label='Crew' />
        <ItemDetialsViewRow field='passengers' label='Passengers' />
        <ItemDetialsViewRow field='cargoCapacity' label='Cargo capacity' />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div
          className='m-auto col-sm'
          // style={{ width: '90%'}}
        >
          <Header />
          {/*{randomPlanet} */}
          {/* <div className='container-fluid mb-2 button-row'>
          <div className='row'>
            <ToggleRandomPlanet onTogglePlanet={this.onTogglePlanet} />
            <ErrorButton />
          </div>
        </div> */}
          <PeoplePage />

          <Row left={personDetails} right={startShipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
