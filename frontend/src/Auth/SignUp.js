import React from 'react';
import { TextInput, Button } from 'react-materialize';

export default function SignUp() {
  return (
    <div>
      <h4>Sign Up</h4>
      <TextInput label='Username' />
      <TextInput label='E-Mail Address' email />
      <TextInput label='Password' password />
      <TextInput label='Confirm Password' password />
      <Button style={{ marginRight: '5px' }} large>
        Sign Up
      </Button>
    </div>
  );
}
