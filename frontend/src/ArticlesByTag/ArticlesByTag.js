import React, { useState, useEffect } from 'react';
import FeaturedArticles from '../HomePage/FeaturedArticles';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/ArticlesByTag.scss';

export default function ArticlesByTag(props) {
  let res;
  const [tags, setTags] = useState([]);

  const getArticles = async tagsArr => {
    return await connectBackend.postData(config.endpoints.article.getByTags, {
      tags: tagsArr
    });
  };
  useEffect(() => {
    let tagsStr = sessionStorage.getItem('taglist');
    let tagsArr = JSON.parse(tagsStr).tags;
    setTags(tagsArr);
    res = getArticles(tagsArr);
  });

  return (
    <div>
      <h1>Articles as per Your Selected Tags</h1>
      <div className='tags-abt'>
        {tags.map(item => (
          <span class='tag is-black is-large is-rounded'>{item}</span>
        ))}
      </div>
      {res.map(item => {
        return (
          <FeaturedArticles
            tags={item.tags}
            title={item.title}
            author={item.author}
            time={item.post_time}
            post_id={item.post_id}
          />
        );
      })}
      {/* <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles />
      <FeaturedArticles /> */}
    </div>
  );
}
