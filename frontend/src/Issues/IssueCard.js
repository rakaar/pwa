import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/IssueCard.scss';

class IssueCard extends Component {
  constructor(props) {
    super(props);
  }

  // get Articles of the issue  by tag
  getArticlesByIssueTag = async () => {
    const id = this.props.id;
    let res = await connectBackend.postData(
      config.endpoints.article.getByTags,
      { id }
    );
    sessionStorage.setItem('taglist', JSON.stringify({ tags: res.data }));
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
