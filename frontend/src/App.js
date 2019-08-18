import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import RespNav from './RespNavbar/RespNav';
import UserProfile from './UserProfile/UserProfile';
import Article from './Article/Article';
import Settings from './UserSettings/Settings';
import Issues from './Issues/Issues';
import ArticleByTag from './ArticlesByTag/ArticlesByTag';
import Footer from './Footer/Footer';

import './App.css';

function App(props) {
  return (
    <Router>
      <div>
        <Route
          path='/'
          // component={RespNav}
          component={() => <RespNav store={props.store} />}
        />
        <Route exact path='/' component={HomePage} />
        <Route path='/user' component={UserProfile} />
        <Route path='/article/:id' component={Article} />
        <Route path='/settings' component={Settings} />
        <Route path='/issues' component={Issues} />
        <Route path='/abt' component={ArticleByTag} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  );
}

export default App;
