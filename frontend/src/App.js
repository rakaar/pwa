import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Navbar/Navbar';
import ArticlesCarousel from './HomePage/Carousel';
import UserProfile from './UserProfile/UserProfile';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={ArticlesCarousel} />
        <Route path='/user/:id' component={UserProfile} />
      </div>
    </Router>
  );
}

export default App;
