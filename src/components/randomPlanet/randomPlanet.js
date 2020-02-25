import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';
import PlanetView from './planetView';
import ErrorIndicator from '../errorIndicator/errorIndicator';

class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
    visible: true
  };
  componentDidMount() {
    this.updatePlanet();
    this.inteval = setInterval(this.updatePlanet, 15000);
  }
  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false, error: false });
  };
  onError = err => {
    this.setState({ error: true, loading: false });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17 + 2);
    this.swapi.Get.planet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };
  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !loading && !error;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div
        className='mb-2 card d-flex flex-row rounded align-items-center p-3'
        style={{ minHeight: '184px' }}
      >
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

export default RandomPlanet;
