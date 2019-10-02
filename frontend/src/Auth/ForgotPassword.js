import React, { Component } from 'react';
import '../Styles/ForgotPassword.scss';

/*eslint-disable*/
export class ForgotPassword extends Component {
  render() {
    return (
      <div className='fp-w'>
        <div class='field'>
          <label class='label'>Enter your Email</label>
          <div class='control'>
            <input class='input' type='email' placeholder='Email' />
          </div>
        </div>
        <a className='button is-info is-rounded btn-custom'>Get Reset Email</a>
      </div>
    );
  }
}

export default ForgotPassword;
