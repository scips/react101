import React from 'react';

class GifItem extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return <li><img src={this.props.gif.url} /></li>
  }
}

export default GifItem;
