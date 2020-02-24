import React from 'react';

const ItemList = () => {
  return (
    <div className='p-0 col-12 col-md-5 mb-2 mb-md-0'>
      <ul
        class='list-group list-group-flush rounded'
        style={{ overflow: 'hidden' }}
      >
        <li class='list-group-item list-group-item-action'>Luke Skywalker</li>
        <li class='list-group-item list-group-item-action'>Darth Vader</li>
        <li class='list-group-item list-group-item-action active'>R2-D2</li>
      </ul>
    </div>
  );
};

export default ItemList;
