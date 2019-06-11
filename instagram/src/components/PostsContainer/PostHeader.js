import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;
  section {
    align-items: center;
    display: flex;
    img {
      border-radius: 1.6rem;
      height: 3.2rem;
      width: 3.2rem;
    }
    h1 {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin-left: 1.6rem;
    }
  }
  aside {
    font-size: 1.6rem;
  }
`;

const PostHeader = (props) => {
  return (
    <Header>
      <section>
        <img src={props.thumbnailUrl} alt='thumbnail' className='post-thumbnail' />
        <h1>{props.username}</h1>
      </section>
      <aside>
        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
      </aside>
    </Header>
  );
};

export default PostHeader;
