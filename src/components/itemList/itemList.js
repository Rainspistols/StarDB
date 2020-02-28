import React, { Component } from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';
import SwapiService from '../../services/swapiService';
import withData from '../../hoc/widthData/widthData';

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map(item => {
    const label = renderLabel(item);
    const { id } = item;

    return (
      <li
        className='list-group-item list-group-item-action'
        style={{ cursor: 'pointer' }}
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <div className='itemList mb-2'>
      <ul
        className='list-group list-group-flush rounded'
        style={{ overflow: 'hidden' }}
      >
        {items}
      </ul>
    </div>
  );
};

const {
  Get: {
    All: { people }
  }
} = new SwapiService();

export default withData(ItemList, people);
