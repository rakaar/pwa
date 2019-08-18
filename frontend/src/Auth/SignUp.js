import React, { useState } from 'react';
import validator from 'email-validator';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/SignIn.scss';
import '../Styles/Snackbar.scss';

export default function SignUp() {
  // form details
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [cnfPassword, SetCnfPassword] = useState('');
  const [mail, SetMail] = useState('');

  // responses from backend errors
  const [nameErr, SetNameErr] = useState(false);
  const [mailErr, SetMailErr] = useState(false);

  // response from frontend errors
  const [mailValid, SetMailValid] = useState(true);
  const [passErr, setPassErr] = useState(false);
  const [pwdLong, SetPwdLong] = useState(true);

  const passErrMsg = <h4 className='err-msg'>Passwords do not match</h4>;
  const nameErrMsg = (
    <h4 className='err-msg'>Username has already been taken</h4>
  );
  const mailErrMsg = (
    <h4 className='err-msg'>Email has already been used to register</h4>
  );
  const mailInvalid = (
    <h4 className='err-msg'>Email seems invalid check again</h4>
  );
  const passShort = (
    <h4 className='err-msg'>
      Password length should be of minimum 6 characters and maximum 20
      characters
    </h4>
  );

  const isMailValid = mail => validator.validate(mail);
  const isPasswordPerfect = pwd => {
    if (pwd.length < 6 || pwd.length > 20) return false;
    else return true;
  };

  const handleSignUp = async () => {
    if (password !== cnfPassword) setPassErr(true);
    else if (!isMailValid(mail)) SetMailValid(false);
    else if (!isPasswordPerfect(password)) SetPwdLong(false);
    else {
      let data = await {
        username,
        password,
        email: mail
      };
      console.log('data is ', data);
      let res = await connectBackend.postData(
        config.endpoints.auth.postSignUp,
        data
      );
      console.log('res from signup ', res);
      if (res.message === 'Username Already Taken') SetNameErr(true);
      else if (res.message === 'Email Already Registered') SetMailErr(true);
      else {
        var x = document.getElementById('snackbar');
        x.className = 'show';
        setTimeout(function() {
          x.className = x.className.replace('show', '');
        }, 5000);
      }
    }
  };

  return (
    <div className='login-wrap signup-form'>
      <div class='field'>
        <label class='label'>Username</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='text'
            placeholder='Username'
            onChange={e => SetUsername(e.target.value)}
          />
        </div>
      </div>
      {nameErr ? nameErrMsg : ''}
      <div class='field'>
        <label class='label'>Email</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='email'
            placeholder='yourname@xyz.in'
            onChange={e => SetMail(e.target.value)}
          />
        </div>
      </div>
      {mailErr ? mailErrMsg : ''}
      {mailValid ? '' : mailInvalid}
      <div class='field'>
        <label class='label'>Password</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='password'
            placeholder='Password'
            onChange={e => SetPassword(e.target.value)}
          />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Confirm Password</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='password'
            placeholder='Confirm Password'
            onChange={e => SetCnfPassword(e.target.value)}
          />
        </div>
      </div>
      {passErr ? passErrMsg : ''}
      {pwdLong ? '' : passShort}
      <a class='button is-info is-rounded btn-custom' onClick={handleSignUp}>
        Sign Up
      </a>
      <div id='snackbar'>Check your mail id for furthur instructions</div>
    </div>
  );
}

// <div className="signup-wrap" >
//                 <h2 className="modal-title"> Sign Up </h2>
//                 <h4 className="modal-toggle"> or <a href="#"> Sign In</a></h4>

//                 <div className="signin-form">
//                     <div class='field'>
//                         <label class='label'>Username</label>
//                         <div class='control'>
//                         <input class='input' type='text' placeholder='Username' />
//                         </div>
//                     </div>
//                     <div class='field'>
//                         <label class='label'>Password</label>
//                         <div class='control'>
//                         <input class='input' type='text' placeholder='Password' />
//                         </div>
//                     </div>
//                     <a class='button is-info is-rounded btn-custom'>Sign Up</a>
//                 </div>
//                 </div>
