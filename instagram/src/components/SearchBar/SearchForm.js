import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
  color: #999999;
  form {
    input {
      background-color: #fafafa;
      border: 1px solid #e6e6e6;
      border-radius: 2px;
      font-size: 1.8rem;
      text-align: center;
      &:focus {
        text-align: left;
      }
    }
  }
`;

const SearchForm = (props) => {
  return (
    <Search>
      <form>
        <input type='text' placeholder='Search' onChange={props.handleInput} />
      </form>
    </Search>
  );
};

export default SearchForm;
