import React from 'react';
import Branding from './Branding';
import SearchForm from './SearchForm';
import ActionButtons from './ActionButtons';

const SearchBar = (props) => {
  return (
    <header className='search-bar'>
      <div className='container'>
        <Branding />
        <SearchForm handleInput={props.handleInput} />
        <ActionButtons />
      </div>
    </header>
  );
};

export default SearchBar;
