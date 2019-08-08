import React from 'react';
import SignModal from './SignModal';

import '../Styles/AuthModal.scss';

class AuthModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showmodals: false
    };
  }

  handleSignModal = () => {
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
        <h5 className='log-in-btn' onClick={this.handleSignModal}>
          Sign In
        </h5>

        {this.state.showmodals ? (
          <SignModal closeClicked={this.closeModal} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default AuthModal;
