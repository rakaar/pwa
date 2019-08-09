import React from 'react';
import SinglePost from './SinglePost';
import PostRef from './PostRef';

const Post = props => {
  return (
    <div className='main-w'>
      <SinglePost url={props.url} />
      <PostRef url={props.url} />

      <style jsx>
        {`
          .main-w {
            background:transparent;
          }
        `}
      </style>
    </div>
  );
};

export default Post;
