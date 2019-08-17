import React, { useState } from 'react';

import connectBackend from '../ConnectBackend/ConnectBackend';
import '../Styles/SignIn.scss';

export default function SignUp() {
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [cnfPassword, SetCnfPassword] = useState('');
  const [mail, SetMail] = useState('');

  const [nameErr, SetNameErr] = useState(false);
  const [mailErr, SetMailErr] = useState(false);

  const handleSignUp = () => {
    if (password !== cnfPassword) {
      // show the error msg
    }
    let url = 'http://10.145.113.217:3000/';
    let data = {
      username,
      password,
      email: mail
    };
    let res = connectBackend.postData(url, data);
    if (res.message === 'Username Already Taken') SetNameErr(true);
    else if (res.message === 'Email Already Registered') SetMailErr(true);
    // handle error in the frontend as error messgae
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
      <a class='button is-info is-rounded btn-custom' onClick={handleSignUp}>
        Sign Up
      </a>
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
