import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostHeader = (props) => {
  return (
    <header>
      <section>
        <img src={props.thumbnailUrl} alt='thumbnail' className='post-thumbnail' />
        <h1>{props.username}</h1>
      </section>
      <aside>
        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
      </aside>
    </header>
  );
};

export default PostHeader;
