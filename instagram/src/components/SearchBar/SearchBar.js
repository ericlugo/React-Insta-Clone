import React from 'react';
import Branding from './Branding';
import SearchForm from './SearchForm';
import ActionButtons from './ActionButtons';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className='search-bar'>
        <div className='container'>
          <Branding />
          <SearchForm />
          <ActionButtons />
        </div>
      </header>
    );
  }
}

export default SearchBar;
