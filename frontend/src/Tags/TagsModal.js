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
    marginTop: '4%',
    marginBotton: '4%'
  }
};

class ExampleApp extends React.Component {
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
          {ArticleTags.map(item => (
            <div className='tags'>
              <span className='tag is-large is-info is-rounded'>{item}</span>
            </div>
          ))}
          <i
            class='fa fa-times fa-3x'
            aria-hidden='false'
            onClick={this.handleCloseModal}
          />
        </ReactModal>
      </div>
    );
  }
}

export default ExampleApp;
