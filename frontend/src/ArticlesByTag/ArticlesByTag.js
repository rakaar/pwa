import React, { useState, useEffect } from 'react';
import FeaturedArticles from '../HomePage/FeaturedArticles';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/ArticlesByTag.scss';

export default function ArticlesByTag(props) {
  const [res, setRes] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let tagsStr = sessionStorage.getItem('taglist');
      let tagsArr = JSON.parse(tagsStr).tags;
      setTags(tagsArr);
      let res = await connectBackend.postData(
        config.endpoints.article.getByTags,
        { tags: tagsArr }
      );
      setRes(res);
    };
    fetchData();
  }, []);

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
