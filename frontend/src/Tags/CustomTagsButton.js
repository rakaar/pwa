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
        <h4 className='log-in-btn' onClick={this.handleTagsModal}>
          Tags
        </h4>

        {this.state.showmodals ? (
          <CustomTagsModal
            store={this.props.store}
            closeClicked={this.closeModal}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default CustomTagsButton;
