import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import RespNav from './RespNavbar/RespNav';
import UserProfile from './UserProfile/UserProfile';
import Article from './Article/Article';
import Settings from './UserSettings/Settings';
import Issues from './Issues/Issues';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={RespNav} />
        <Route exact path='/' component={HomePage} />
        <Route path='/user/:id' component={UserProfile} />
        <Route path='/article/:id' component={Article} />
        <Route path='/settings/:id' component={Settings} />
        <Route path='/issues' component={Issues} />
      </div>
    </Router>
  );
}

export default App;
