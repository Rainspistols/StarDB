import React from 'react';

import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ onServiceChange }) => {
  return (
    <div className='header d-flex'>
      <h3>
        <Link to='StarDB'>StarDB</Link>
      </h3>
      <ul className='d-flex'>
        <li>
          <Link to='/StarDB/people/'>People</Link>
        </li>
        <li>
          <Link to='/StarDB/planets/'>Planets</Link>
        </li>
        <li>
          <Link to='/StarDB/starships/'>Starships</Link>
        </li>
        <li>
          <Link to='/StarDB/login'>Login</Link>
        </li>
        <li>
          <Link to='/StarDB/secret'>Secret</Link>
        </li>
      </ul>
      <button className='btn btn-primary btn-small' onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};

export default Header;
