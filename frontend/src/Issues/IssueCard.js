import React, { Component } from 'react';

import '../Styles/IssueCard.scss';

class IssueCard extends Component {
  state = {
    issue: 'jun19'
  }
  render(){
    return (
      <div>
        <div class='container'>
          <img
            src='https://images.pexels.com/photos/2727736/pexels-photo-2727736.jpeg?cs=srgb&dl=beautiful-brunette-fashion-2727736.jpg&fm=jpg'
            class='image'
          />
  
          <div className='middle'>
            <h1>June 2019</h1>
            <br />
            <div className="bc-i">
            <a class='button'>
              See Issue
            </a>
            <a class='button' href={`https://cdn.iit-techambit.in/issue/${this.state.issue}.pdf`}>
              Download
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IssueCard