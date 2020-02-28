import React from 'react';

const ItemDetailsView = ({
  item,
  image,
  children
}) => {
  return (
    <>
      <img
        className='img-fluid rounded mr-2 w-auto img-fluid'
        style={{ maxWidth: '150px', maxHeight: '150px' }}
        src={image}
        alt={item.name}
      />
      <ul className='list-group list-group-flush p-0'>
        <h4 className='p-0'>{item.name}</h4>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { item });
        })}
        {/* <li className='list-group-item p-1'>Gender: {gender}</li>
        <li className='list-group-item p-1'>Birth Year: {birthYear}</li>
        <li className='list-group-item p-1'>Eye Color: {eyeColor}</li> */}
      </ul>
    </>
  );
};

export default ItemDetailsView;
