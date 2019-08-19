import React, { Component } from 'react';
import config from '../Config';

import '../Styles/IssueCard.scss';

class IssueCard extends Component {
  render(){
    const issue = this.props.issue
    const issueCode = issue.slice(0, 3).toLowerCase() + issue.slice(issue.length - 2, issue.length)
    return (
      <div>
        <div class='container'>
          <img
            src='https://images.pexels.com/photos/2727736/pexels-photo-2727736.jpeg?cs=srgb&dl=beautiful-brunette-fashion-2727736.jpg&fm=jpg'
            class='image'
          />
  
          <div className='middle'>
            <h1>{this.props.issue}</h1>
            <br />
            <div className="bc-i">
            <a class='button'>
              See Issue
            </a>
            <a class='button' href={`${config.issuecdn}${issueCode}.pdf`}>
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