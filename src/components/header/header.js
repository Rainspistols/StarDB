import React from 'react';

const Header = () => {
  return (
    <div
      className='container-fluid d-flex mt-2 mb-5 align-items-center rounded'
    >
      <h3 className='mb-0 p-0 mr-4 text-nowrap'>Star DB</h3>
      <ul className='nav'>
        <li className='nav-item'>
          <a className='nav-link ml-4 mr-4 p-0 active' href='/'>
            People
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link ml-4 mr-4 p-0' href='/'>
            Planets
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link ml-4 mr-4 p-0' href='/'>
            Starships
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
