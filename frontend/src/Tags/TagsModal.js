import React from 'react';
import ReactModal from 'react-modal';

import '../Styles/TagsModal.scss';

const ArticleTags = [
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag',
  'sample tag'
];

const customStyles = {
  content: {
    marginTop: '5%',
    marginBottom: '20%'
  }
};

class TagsModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

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
          <div className='tags'>
            {ArticleTags.map(item => (
              <span className='tag is-large is-info is-rounded'>{item}</span>
            ))}
          </div>
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
