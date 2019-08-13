import React from 'react';
import SinglePost from './SinglePost';
import PostRef from './PostRef';
import '../Styles/Article.scss'

const Post = props => {
  return (
    <div className='main-w'>
      <SinglePost url={props.url} />

      <div className="save-article-w">
        <h2> Liked the article ? </h2>
        <button className="save-btn"> Save </button>
        <button className="save-btn"> Share </button> 
      </div>

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
