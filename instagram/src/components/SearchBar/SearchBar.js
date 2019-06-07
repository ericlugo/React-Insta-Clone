import React from 'react';
import styled from 'styled-components';
import Branding from './Branding';
import SearchForm from './SearchForm';
import ActionButtons from './ActionButtons';

const HeaderBar = styled.header`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  color: #000000;
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1000px;
  padding: 1.2rem;
`;

const SearchBar = (props) => {
  return (
    <HeaderBar>
      <Container>
        <Branding />
        <SearchForm handleInput={props.handleInput} />
        <ActionButtons />
      </Container>
    </HeaderBar>
  );
};

export default SearchBar;
