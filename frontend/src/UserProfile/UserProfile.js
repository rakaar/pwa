import React, { useState, useEffect } from 'react';
import SavedArticle from './SavedArticle';
import SavedTags from './SavedTags';
import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';
import '../Styles/UserProfile.scss';

export default function UserProfile(props) {
  let id = props.match.params.id;
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    fb_handle: '',
    g_handle: '',
    medium_handle: '',
    twitter_handle: '',
    linkedin_handle: '',
    bio: ''
  });
  const [tags, SetTags] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let id = 1; // id we get from user login
      let tagsRes = await connectBackend.getData(
        config.endpoints.user.getFollowedTags,
        {
          id
        }
      );
      SetTags(tagsRes.data);

      let userRes = await connectBackend.getData(
        config.endpoints.user.getUser,
        { id }
      );
      setUserData({
        username: userRes.data.username,
        email: userRes.data.email,
        fb_handle: userRes.data.fb_handle,
        g_handle: userRes.data.g_handle,
        medium_handle: userRes.data.medium_handle,
        twitter_handle: userRes.data.twitter_handle,
        linkedin_handle: userRes.data.linkedin_handle,
        bio: userRes.data.bio
      });

      let savedArticlesRes = await connectBackend.getData(
        config.endpoints.user.getSavedArticles,
        { id }
      );
      setSavedArticles(savedArticlesRes.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className='profile'>
        <div className='name-sec'>
          <img
            className='user-image'
            src='https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
          />
          <div className='name-r'>
            <h2 className='username'>{userData.username}</h2>
            {/* <a href='#' className='edit-profile'>
              Edit
            </a> */}
            <br />
            <h3>{userData.bio}</h3>

            <div className='icons'>
              <i
                class='fa fa-facebook-square fa-3x'
                aria-hidden='false'
                href={'https://facebook.com/' + userData.fb_handle}
              />
              <i
                class='fa fa-twitter-square fa-3x'
                aria-hidden='false'
                href={'https://twitter.com/' + userData.twitter_handle}
              />
              <i
                class='fa fa-linkedin-square fa-3x'
                aria-hidden='false'
                href={'https://linkedin.com/in/' + userData.linkedin_handle}
              />
              <i
                class='fa fa-medium fa-3x'
                aria-hidden='false'
                href={'https://medium.com/' + userData.medium_handle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='saved-tags'>
        <SavedTags tags={tags} />
      </div>

      <div className='saved-cards-w'>
        <h2> Saved Articles </h2>
        <div className='saved-cards-g'>
          {savedArticles.map(item => {
            return <SavedArticle title={item.title} author={item.author} />;
          })}
        </div>
      </div>
    </div>
  );
}
