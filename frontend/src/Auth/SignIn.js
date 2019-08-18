import React from 'react';
import '../Styles/SignIn.scss'

class SignIn extends React.Component {

  forgotPassHandle = () => {
    this.props.forgotPass()
  }

  render() {
    return (
      <div className="login-wrap" >
        
      
      <div className="signin-form">
          <div class='field'>
              <label class='label'>Username</label>
              <div class='control'>
              <input class='input' type='text' placeholder='Username' />
              </div>
          </div>
          <div class='field'>
              <label class='label'>Password</label>
              <div class='control'>
              <input class='input' type='text' placeholder='Password' />
              </div>
          </div>
          <a className="fp-b" onClick={this.forgotPassHandle}> Forgot Password ?</a>
          <a className='button is-info is-rounded btn-custom'>Sign In</a>
      </div>
  
      </div>
    );
  }
}

export default SignIn