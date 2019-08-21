import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';
import '../Styles/SignIn.scss';

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Errors from backend response
  const [loggedInAlreadyErr, SetIsLoggedInAleadyErr] = useState(false);
  const [IsMailVerifiedErr, SetIsMailVerifiedErr] = useState(false);
  const [IsNotMatchErr, SetIsNotMatchErr] = useState(false);

  // Error Messages to be shown
  const AlreadyLoggedInMsg = <h4 className='err-msg'>Already Logged In</h4>;
  const MailNotVerifiedMsg = (
    <h4 className='err-msg'>Please verify your email before first login</h4>
  );
  const NotMatchMsg = (
    <h4 className='err-msg'>Email or password does not match</h4>
  );

  const forgotPassHandle = () => {
    // handle forgetPassword
    props.forgotPass();
  };
  const handleSignIn = async () => {
    let data = {
      email,
      password
    };
    let res = await connectBackend.postData(config.endpoints.postLogin, {
      data
    });
    console.log('res from signin ', res);

    if (res.message === 'Already Logged In') SetIsLoggedInAleadyErr(true);
    else if (res.message === 'Please verify your email before first login')
      SetIsMailVerifiedErr(true);
    else if (res.message === 'email or password does not match.')
      SetIsNotMatchErr(true);
    else {
      console.log('successfully logged in'); //dbg st
      setUsername(res.data.username);
      localStorage.setItem('loginToken', 'user logged in successfully');
      localStorage.setItem('username', username);
      props.history.push('/');
      props.closeOnLogin();
    }
  };

  return (
    <div className='login-wrap'>
      <div className='signin-form'>
        <div class='field'>
          <label class='label'>Email</label>
          <div class='control'>
            <input
              class='input'
              type='text'
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class='field'>
          <label class='label'>Password</label>
          <div class='control'>
            <input
              class='input'
              type='password'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        {loggedInAlreadyErr ? '' : AlreadyLoggedInMsg}
        {IsMailVerifiedErr ? '' : MailNotVerifiedMsg}
        {IsNotMatchErr ? '' : NotMatchMsg}
        <a className='fp-b' onClick={forgotPassHandle}>
          {' '}
          Forgot Password ?
        </a>
        <a class='button is-info is-rounded btn-custom' onClick={handleSignIn}>
          Sign In
        </a>
      </div>
    </div>
  );
}

export default withRouter(SignIn);
