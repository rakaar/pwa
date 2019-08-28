import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../Styles/IssueCard.scss';

class IssueCard extends Component {
  constructor(props) {
    super(props);
  }

  // get Articles of the issue  by tag
  getArticlesByIssueTag = () => {
    let issueTag =
      this.props.month.toLowerCase().slice(6, 11) + this.props.year.slice(2);
    sessionStorage.setItem('taglist', JSON.stringify({ tags: [issueTag] }));
    console.log(
      'to get issuearts by tag',
      JSON.stringify({ tags: [issueTag] })
    );
    this.props.history.push('/abt');
  };

  parseMonthName = str => {
    let monthName = str.slice(6, 11);
    monthName = monthName.toUpperCase();
    return monthName;
  };

  render() {
    return (
      <div>
        <div class='container'>
          <img src={this.props.cover} class='image' />

          <div className='middle'>
            <h1>
              {this.parseMonthName(this.props.month)} {this.props.year}
            </h1>
            <br />
            <div className='bc-i'>
              {/* <a class='button is-large' onClick={this.getArticlesByIssueTag}>
                See Issue
              </a> */}
              <a class='button is-large' href={this.props.link}>
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
