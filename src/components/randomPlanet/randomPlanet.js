import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';

class RandomPlanet extends Component {
  swapi = new SwapiService();

  state = {};

  render() {
    return (
      <div className='mb-5 card d-flex flex-row rounded align-items-center p-3 justify-content-center'>
        <img
          className='img-fluid rounded mr-2'
          style={{ maxWidth: '150px', maxHeight: '150px' }}
          src='https://www.seekpng.com/png/full/435-4355957_jupiter-planet-jupiter-square-sticker-3-x-3.png'
          alt='Card cap'
        />
        <ul className='list-group list-group-flush p-0'>
          <h4 className='p-0'>Planet Name</h4>
          <li className='list-group-item p-1 ml-4'>Population: 123124</li>
          <li className='list-group-item p-1 ml-4'>Rotation Period: 43</li>
          <li className='list-group-item p-1 ml-4'>Diameter: 100</li>
        </ul>
      </div>
    );
  }
}

export default RandomPlanet;
