import React from 'react';
import Branding from './branding';
import SearchForm from './searchForm';
import ActionButtons from './actionButtons';

class searchBar extends React.Component {
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

export default searchBar;
