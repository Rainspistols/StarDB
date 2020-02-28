import React from 'react';

const ItemDetialsViewRow = ({ item, field, label }) => {
  return (
    <li className='list-group-item p-1'>
      {label}: {item[field]}
    </li>
  );
};
export default ItemDetialsViewRow;
