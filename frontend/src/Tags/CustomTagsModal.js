import React, { Component } from 'react';
import Fuse from 'fuse.js';
import { withRouter } from 'react-router-dom';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/SignModal.scss';

const ArticleTags = [
  'wyyy',
  'wyyy',
  'wyyy',
  'sample tag',
  'sample tag',
  'dzzz',
  'zdd'
];

class CustomTagsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsSearching: false,
      searchResults: [],
      selectedTags: [],
      allTags: []
    };

    this.handleSearch = this.handleSearch.bind(this);

    this.options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['name']
    };
    this.fuse = new Fuse(this.state.allTags, this.options);
  }

  async componentDidMount() {
    let res = await connectBackend.getData(config.endpoints.tag.getAll, {});
    this.setState({ allTags: res.data });
    this.fuse = new Fuse(this.state.allTags, this.options);
  }

  handleSearch = async e => {
    this.setState({
      searchResults: this.fuse.search(e.target.value)
    });

    if (e.target.value !== '') this.setState({ IsSearching: true });
    else this.setState({ IsSearching: false });
  };

  closeModal = () => {
    this.props.closeClicked();
  };

  selectTags = event => {
    event.target.className += ' is-success';
    let tempTags = this.state.selectedTags;
    tempTags.push(event.target.innerText);
    this.setState({ selectTags: tempTags });
  };

  getArticles = () => {
    sessionStorage.setItem(
      'taglist',
      JSON.stringify({ tags: this.state.selectedTags })
    );
    this.props.history.push('/abt');
    this.closeModal();
  };

  render() {
    return (
      <div className='modal-wrapper'>
        <h2 className='modal-title'>Tags</h2>
        <div class='field has-addons' id='search-tags'>
          <div class='control'>
            <input
              class='input'
              type='text'
              placeholder='Search Tags'
              onChange={this.handleSearch}
            />
          </div>
        </div>

        <i
          class='fa-times fa fa-2x modal-close-btn'
          onClick={this.closeModal}
        />

        {this.state.IsSearching ? (
          <div className='tags'>
            {this.state.searchResults.map(item => (
              <span
                className='tag is-large is-rounded is-primary'
                onClick={this.selectTags}
              >
                {item.name}
              </span>
            ))}
          </div>
        ) : (
          <div className='tags'>
            {this.state.allTags.map(item => (
              <span
                className='tag is-large is-rounded is-primary'
                onClick={this.selectTags}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
        <a className='button' onClick={this.getArticles}>
          Get Articles by Selected Tags
        </a>
      </div>
    );
  }
}

export default withRouter(CustomTagsModal);
