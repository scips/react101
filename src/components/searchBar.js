import React from 'react';

/**
 * <SearchBar onTermChange={handlerFunction} />
 * onTermChange(String term) is called whenever the input content changes
 */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // by default search is empty
    this.state = {term: ''}
  }

  onInputChange(term) {
    // this.state = {term: term} // es2015 specific
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input onChange={ e => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
