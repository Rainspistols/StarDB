import React from 'react';
import './ErrorIndicator.css';
import gif from './tenor.gif';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img style={{ width: '200px' }} src={gif} alt='error icon' />
      <span className='boom'>BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
