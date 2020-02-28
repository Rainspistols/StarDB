import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-between'>
        {left}
        {right}
      </div>
    </div>
  );
};

export default Row;
