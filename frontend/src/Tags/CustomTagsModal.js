import React, { Component } from 'react';
import Fuse from 'fuse.js';
import '../Styles/SignModal.scss';

const ArticleTags = ['wyyy', 'sample tag', 'sample tag', 'dzzz', 'zdd'];

var options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1
};
var fuse = new Fuse(ArticleTags, options);

class CustomTagsModal extends Component {
  constructor() {
    super();
    this.state = {
      IsSearching: false,
      searchResults: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    if (e.target.value !== '') this.setState({ IsSearching: true });
    else this.setState({ IsSearching: false });

    this.setState({
      searchResults: fuse.search(e.target.value)
    });
  }

  closeModal = () => {
    this.props.closeClicked();
  };

  selectTags = event => {
    event.target.className += ' is-success';
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
          <div class='control'>
            <a class='button is-info'>Search</a>
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
                className='tag is-large is-rounded'
                onClick={this.selectTags}
              >
                {ArticleTags[item]}
              </span>
            ))}
          </div>
        ) : (
          <div className='tags'>
            {ArticleTags.map(item => (
              <span
                className='tag is-large is-rounded'
                onClick={this.selectTags}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CustomTagsModal;
