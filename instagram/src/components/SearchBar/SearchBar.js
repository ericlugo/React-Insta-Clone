import React from 'react';
import Branding from './Branding';
import ActionButtons from './ActionButtons';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className='search-bar'>
        <Branding />
        <ActionButtons />
      </header>
    );
  }
}

export default SearchBar;
