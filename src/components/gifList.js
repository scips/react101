import React from 'react';
import GifItem from './gifItem';

const GifList = (props) => {
  const gifItems = props.imageList.map( (image) => {
    return <GifItem gif={image} />
  });

  return (
    <li>
      {gifItems}
    </li>
  );
};

export default GifList;
