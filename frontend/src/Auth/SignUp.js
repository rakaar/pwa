import React from 'react';

export default function SignUp() {
  return (
    <div>
      <div class='field'>
        <label class='label'>UserName</label>
        <div class='control'>
          <input class='input is-rounded' type='text' placeholder='Username' />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Email Address</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='email'
            placeholder='example@service.com'
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
          />
        </div>
      </div>
      <div class='field'>
        <label class='label'>Confirm Password</label>
        <div class='control'>
          <input
            class='input is-rounded'
            type='password'
            placeholder='COnfirm Password'
          />
        </div>
      </div>
      <a class='button is-info is-rounded'>Sign Up</a>
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