import React from 'react';

const PersonContent = ({
  person: { id, name, gender, birthYear, eyeColor }
}) => {
  return (
    <>
      <img
        className='img-fluid rounded mr-2 w-auto img-fluid'
        style={{ maxWidth: '150px', maxHeight: '150px' }}
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />
      <ul className='list-group list-group-flush p-0'>
        <h4 className='p-0'>{name}</h4>
        <li className='list-group-item p-1'>Gender: {gender}</li>
        <li className='list-group-item p-1'>Birth Year: {birthYear}</li>
        <li className='list-group-item p-1'>Eye Color: {eyeColor}</li>
      </ul>
    </>
  );
};

export default PersonContent;
