import React from 'react';
import ReactModal from 'react-modal';
import Fuse from 'fuse.js';

import '../Styles/TagsModal.scss';

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

const customStyles = {
  content: {
    marginTop: '5%',
    marginBottom: '80%'
  }
};

class TagsModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      IsSearching: false,
      searchResults: []
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    if (e.target.value !== '') this.setState({ IsSearching: true });
    else this.setState({ IsSearching: false });

    this.setState({
      searchResults: fuse.search(e.target.value)
    });
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  selectTags = event => {
    event.target.className += ' is-success';
  };

  render() {
    return (
      <div>
        <h5 onClick={this.handleOpenModal}>Tags</h5>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel='Minimal Modal Example'
          style={customStyles}
        >
          <h1 className='tags-title'>Tags</h1>
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
          <i
            class='fa fa-times fa-3x close-tags-modal'
            aria-hidden='false'
            onClick={this.handleCloseModal}
          />
        </ReactModal>
      </div>
    );
  }
}

export default TagsModal;
