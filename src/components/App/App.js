import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorButton from '../errorButton/errorButton';

import './App.css';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PeoplePage from './peoplePage/peoplePage';
import SwapiService from '../../services/swapiService';
import Row from '../../layout/row/row';
import ItemDetails from '../PersonDetails/itemDetails';
import ErrorBoundry from '../errorBoundry/errorBoundry';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );
    
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <ErrorBoundry>
        <div className='stardb-app w-75 m-auto'>
          <Header />
          {/* {planet}

        <div className=''>
          <button
            className='toggle-planet mb-2 mr-2 btn btn-warning btn-lg'
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div> */}
          {/* 
        <PeoplePage /> */}
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
