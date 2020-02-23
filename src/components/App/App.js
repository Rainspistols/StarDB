import React, { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorButton from '../errorButton/errorButton';

import SwapiService from '../../services/swapiService';
import Row from '../../layout/row/row';
import ItemDetails from '../itemDetails/itemDetails';
import ErrorBoundry from '../errorBoundry/errorBoundry';
import Record from '../itemDetails/itemDetails';

import './App.css';

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
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
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
