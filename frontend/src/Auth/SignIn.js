import React from 'react';
import { TextInput, Button } from 'react-materialize';
export default function SignIn() {
  return (
    <div>
      <h4>Sign In</h4>
      <TextInput label='Username' />
      <TextInput label='Password' password />
      <Button style={{ marginRight: '5px' }} large>
        Sign In
      </Button>
    </div>
  );
}
