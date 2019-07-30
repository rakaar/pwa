import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Carousel from './HomePage/Carousel';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Carousel} />
      </div>
    </Router>
  );
}

export default App;
