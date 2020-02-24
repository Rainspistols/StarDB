import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';

class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {}
  };
  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 19 + 1);
    this.swapi.Get.planet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter }
    } = this.state;
    return (
      <div
        className='mb-5 card d-flex flex-row rounded align-items-center p-3'
        style={{ minHeight: '184px' }}
      >
        <img
          className='img-fluid rounded mr-2'
          style={{ maxWidth: '150px', maxHeight: '150px' }}
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt='planet'
        />
        <ul className='list-group list-group-flush p-0'>
          <h4 className='p-0'>{name}</h4>
          <li className='list-group-item p-1 ml-4'>Population: {population}</li>
          <li className='list-group-item p-1 ml-4'>
            Rotation Period: {rotationPeriod}
          </li>
          <li className='list-group-item p-1 ml-4'>Diameter: {diameter}</li>
        </ul>
      </div>
    );
  }
}

export default RandomPlanet;
