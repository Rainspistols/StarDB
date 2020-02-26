import React from 'react';
import icon from './boom.svg';

const ErrorIndicator = () => {
  return (
    <div className='alert m-auto text-warning text-center' role='alert'>
      <img
        className='d-block m-auto'
        style={{ maxWidth: '100px' }}
        src={icon}
        alt='error icon'
      />
      <span>
        Something has gone terribly wrong (but we already send droids to fix
        it).
      </span>
    </div>
  );
};

export default ErrorIndicator;
