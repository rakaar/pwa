import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import UserProfile from './UserProfile/UserProfile';
import Article from './Article/Article';
import Settings from './UserProfile/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/user/:id' component={UserProfile} />
        <Route path='/article/:id' component={Article} />
        <Route path='/settings/:id' component={Settings} />
      </div>
    </Router>
  );
}

export default App;
