import React from 'react';
const PersonDetails = () => {
  return (
    <div className='col-12 col-md-6 ml-auto card d-flex flex-row rounded align-items-center p-3'>
      <img
        className='img-fluid rounded mr-2 w-auto img-fluid'
        style={{ maxWidth: '150px', maxHeight: '150px' }}
        src='https://www.seekpng.com/png/full/435-4355957_jupiter-planet-jupiter-square-sticker-3-x-3.png'
        alt='Card cap'
      />
      <ul className='list-group list-group-flush p-0'>
        <h4 className='p-0'>R2-D2</h4>
        <li className='list-group-item p-1'>Gender: male</li>
        <li className='list-group-item p-1'>Birth Year: 43</li>
        <li className='list-group-item p-1'>Eye Color: red</li>
      </ul>
    </div>
  );
};

export default PersonDetails;
