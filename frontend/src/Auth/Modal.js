import React from 'react';
import { Modal, Tabs, Tab } from 'react-materialize';
import SignUp from './SignUp';
import SignIn from './SignIn';

import '../Styles/Modal.scss';

export default function AuthModal() {
  return (
    <div>
      <Modal
        trigger={<h5>Sign Up</h5>}
        children={
          <div>
            <SignIn />
            <SignUp />
          </div>
        }
      />
    </div>
  );
}
