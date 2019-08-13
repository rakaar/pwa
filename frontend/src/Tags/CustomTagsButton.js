import React from 'react';
import CustomTagsModal from './CustomTagsModal';

import '../Styles/AuthModal.scss';

class CustomTagsButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showmodals: false
    };
  }

  handleTagsModal = () => {
    this.setState({
      showmodals: true
    });
  };

  closeModal = () => {
    this.setState({
      showmodals: false
    });
  };

  render() {
    return (
      <div>
        <h5 className='log-in-btn' onClick={this.handleTagsModal}>
          Tags
        </h5>

        {this.state.showmodals ? (
          <CustomTagsModal closeClicked={this.closeModal} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default CustomTagsButton;
