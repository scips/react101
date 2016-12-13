import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import GifList from './components/gifList';

class App extends React.Component {
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList imageList={[{url:'http://lorempixel.com/300/200/sports/img1/'},
        {url:'http://lorempixel.com/300/200/sports/img2/'},
        {url:'http://lorempixel.com/300/200/sports/img3/'}]}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
