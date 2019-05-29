import React from 'react';

const SearchForm = (props) => {
  return (
    <div className='search'>
      <form>
        <input type='text' placeholder='Search' onChange={props.handleInput} />
      </form>
    </div>
  );
};

export default SearchForm;
