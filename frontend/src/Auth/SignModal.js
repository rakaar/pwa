import React, { Component } from 'react';
import '../Styles/SignModal.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

class SignModal extends Component {
  state = {
    showSignInForm: true
  };

  showSignUp = () => {
    this.setState({ showSignInForm: !this.state.showSignInForm });
  };

  closeModal = () => {
    this.props.closeClicked();
  };

  render() {
    return (
      <div this className='modal-wrapper'>
        <h2 className='modal-title'>
          {' '}
          {this.state.showSignInForm ? 'Sign In' : 'Sign Up'}{' '}
        </h2>
        <h4 onClick={this.showSignUp} className='modal-toggle'>
          {' '}
          or{' '}
          <a href='#'> {this.state.showSignInForm ? 'Sign Up' : 'Sign In'} </a>
        </h4>

        <i
          class='fa-times fa fa-2x modal-close-btn'
          onClick={this.closeModal}
        />
        {this.state.showSignInForm ? <SignIn /> : <SignUp />}
      </div>
    );
  }
}

export default SignModal;
