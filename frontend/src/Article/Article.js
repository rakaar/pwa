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
  const [isPostSaved, setIsPostSaved] = useState(false);

  let saveBtn = document.getElementsByClassName('save-btn');

  const saveArticle = () => {
    connectBackend.postData(config.endpoints.article.postSave, { id });
    if (saveBtn.className.includes('saved-post')) {
      savedBtn.className.replace('saved-post', '');
      setIsPostSaved(false);
    } else {
      savedBtn.className += 'saved-post';
      setIsPostSaved(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let res;
      res = await connectBackend.getData(config.endpoints.article.getPost, {
        id
      });
      res = res.data;
      setIsPostSaved(res.isSaved);
      if (isPostSaved) saveBtn.className += 'saved-post';
      setTitle(res.title);
      setAuthor(res.author);
      setTime(res.post_time);
      setBody(res.body);
    };
    fetchData();
  }, [isPostSaved]);

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
          {isPostSaved ? 'Saved' : 'Save'}{' '}
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
