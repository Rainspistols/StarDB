import React from 'react';

const ToggleRandomPlanet = ({onTogglePlanet}) => {
  return (
    <button
      type='button'
      className='btn btn-warning mr-2'
      data-toggle='button'
      aria-pressed='false'
      onClick={() => onTogglePlanet()}
    >
      Toggle random planet
    </button>
  );
};

export default ToggleRandomPlanet;
