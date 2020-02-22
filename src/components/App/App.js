import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorButton from '../errorButton/errorButton';

import './App.css';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PeoplePage from './peoplePage/peoplePage';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className='stardb-app w-75 m-auto'>
        <Header />
        {planet}

        <div className=''>
          <button
            className='toggle-planet mb-2 mr-2 btn btn-warning btn-lg'
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
      </div>
    );
  }
}
