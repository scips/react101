import React from 'react';
import GifItem from './gifItem';

class GifList extends React.Component {
  constructor (props) {
    super(props);
    this.gifItems = props.imageList.map( (image) => {
      return <GifItem gif={image} />
    });
  }

  render() {
    return (
      <ul className="gifs">
        {this.gifItems}
      </ul>
    );
  }
}

export default GifList;
