import React from 'react';

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  
  return (
    <>
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
    </>
  );
};

export default PlanetView;
