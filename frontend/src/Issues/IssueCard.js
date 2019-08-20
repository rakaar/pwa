import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../Styles/IssueCard.scss';

class IssueCard extends Component {
  constructor(props) {
    super(props);
  }

  // get Articles of the issue  by tag
  getArticlesByIssueTag = () => {
    let issueTag = props.month.toLowerCase().slice(0, 3) + props.year.slice(2);
    sessionStorage.setItem('taglist', JSON.stringify({ tags: [issueTag] }));
    props.history.push('/abt');
  };

  render() {
    return (
      <div>
        <div class='container'>
          <img src={this.props.cover} class='image' />

          <div className='middle'>
            <h1>
              {this.props.month} {this.props.year}
            </h1>
            <br />
            <div className='bc-i'>
              <a class='button' onClick={this.getArticlesByIssueTag}>
                See Issue
              </a>
              <a class='button' href={this.props.link}>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IssueCard);
