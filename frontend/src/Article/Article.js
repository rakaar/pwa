import React, { useState, useEffect } from 'react';
import SinglePost from './SinglePost';
import PostRef from './PostRef';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/Article.scss';

function Post(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [time, setTime] = useState('');
  const [body, setBody] = useState('');
  const [isPostSaved, setIsPostSaved] = useState(false);

  let saveBtn = document.getElementsByClassName('save-btn');

  const saveArticle = () => {
    let id = props.match.params.id;
    connectBackend.postData(config.endpoints.article.postSave, { id });
    if (saveBtn.className.includes('saved-post')) {
      saveBtn.className.replace('saved-post', '');
      setIsPostSaved(false);
    } else {
      saveBtn.className += 'saved-post';
      setIsPostSaved(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('paramsi is', props);
      let id = props.match.params.id;
      console.log('id is ', id); // dbg st
      let res;
      res = await connectBackend.getData(config.endpoints.article.getPost, {
        id
      });
      console.log('indiv article by id is', res);
      res = res.data;
      setIsPostSaved(res.isSaved);
      if (isPostSaved) saveBtn.className += 'saved-post';
      setTitle(res.title);
      setAuthor(res.author);
      setTime(res.post_time);
      setBody(res.body);
    };
    fetchData();
  }, []);

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
}

export default Post;
