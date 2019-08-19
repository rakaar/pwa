import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';
import PostRef from './PostRef';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/Article.scss';

const Post = props => {
  const id = props.match.params.id;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [time, setTime] = useState('');
  const [body, setBody] = useState('');

  const saveArticle = () => {
    connectBackend.postData(config.endpoints.article.postSave, { id });
  };
  const getRes = async id => {
    return await connectBackend.getData(config.endpoints.article.getPost, {
      id
    });
  };

  useEffect(() => {
    let res = getRes(id);

    setTitle(res.title);
    setAuthor(res.author);
    setTime(res.post_time);
    setBody(res.body);
  });
  return (
    <div className='main-w'>
      <SinglePost
        url={props.url}
        title={title}
        author={author}
        time={time}
        body={body}
      />

      <div className='save-article-w'>
        <h2> Liked the article ? </h2>
        <button className='save-btn' onClick={saveArticle}>
          {' '}
          Save{' '}
        </button>
        <button className='save-btn'> Share </button>
      </div>

      <PostRef url={props.url} />

      <style jsx>
        {`
          .main-w {
            background: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default Post;
