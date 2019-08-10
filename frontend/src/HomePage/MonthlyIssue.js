import React from 'react';
import '../Styles/MonthlyIssue.scss'

import '../Styles/CustomCard.scss';

export default function CustomCard() {
  return (
    <div className='monthly-box'>
      <h2>Issue #18</h2>
      <h3> August 5, 2019 </h3>
      <a href="#"> View All </a> <br></br>

      <span className="issue-des">
          How Does the dev mode work ? | Photoronoi | Adblocking | How about Nah? | Scope in Javascript - HTTP 203
      </span>
      <div className="img-cont">
          <img src="https://images.pexels.com/photos/2727736/pexels-photo-2727736.jpeg?cs=srgb&dl=beautiful-brunette-fashion-2727736.jpg&fm=jpg"></img>
      </div>
      <a href="#" className="view-issue-btn">
        View Issue ➡
      </a>
    </div>
  );
}
