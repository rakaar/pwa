import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import HomePage from './HomePage/HomePage';
import RespNav from './RespNavbar/RespNav';
import UserProfile from './UserProfile/UserProfile';
import Article from './Article/Article';
import Settings from './UserSettings/Settings';
import Issues from './Issues/Issues';
import ArticleByTag from './ArticlesByTag/ArticlesByTag';
import Footer from './Footer/Footer';
import ErrorPage from './Error/Error';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={RespNav} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/abt' component={ArticleByTag} />
        <Route exact path='/article/:id' component={Article} />
        {/* <Route exact path='/' component={HomePage} />
        <Route path='/user' component={UserProfile} />

        <Route path='/settings' component={Settings} /> */}
        <Route exact path='/issues' component={Issues} />
        <Route exact path='/abt' component={ArticleByTag} />
        {/* <Route exact path='/404' component={ErrorPage} /> */}
        {/* <Route path='/abt' component={ArticleByTag} />
         */}
         <Route path='/' component={Footer} />
      </div>
    </Router>
  );
}

export default App;
