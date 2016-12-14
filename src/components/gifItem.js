import React from 'react';

const GifItem = (props) => {
  return (
    <li className="gif-item" onClick={() => props.onGifSelect(props.gif)}>
      <img src={props.gif.images.downsized.url} alt={props.gif.slug} />
    </li>
  )
};

export default GifItem;
