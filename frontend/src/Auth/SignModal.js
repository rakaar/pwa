import React, { Component } from 'react';
import '../Styles/SignModal.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

class SignModal extends Component {
  state = {
    showSignInForm: true,
    forgotPassword: false
  };

  showSignUp = () => {
    this.setState({ showSignInForm: !this.state.showSignInForm });
  };

  closeModal = () => {
    this.props.closeClicked();
    this.setState({ forgotPassword: false });
  };

  forgotPassHandler = () => {
    this.setState({ forgotPassword: true });
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
          or <a> {this.state.showSignInForm ? 'Sign Up' : 'Sign In'} </a>
        </h4>

        <i
          class='fa-times fa fa-2x modal-close-btn'
          onClick={this.closeModal}
        />
        {this.state.forgotPassword ? <ForgotPassword /> : <></>}
        {this.state.showSignInForm && !this.state.forgotPassword ? (
          <SignIn
            forgotPass={this.forgotPassHandler}
            closeOnLogin={this.closeModal}
          />
        ) : (
          <></>
        )}
        {!this.state.showSignInForm && !this.state.forgotPassword ? (
          <SignUp />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default SignModal;
