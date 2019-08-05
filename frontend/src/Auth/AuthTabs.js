import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SignUp from './SignUp';
import SignIn from './SignIn';

import 'react-tabs/style/react-tabs.css';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Sign Up</Tab>
      <Tab>Sign In</Tab>
    </TabList>

    <TabPanel>
      <SignUp />
    </TabPanel>
    <TabPanel>
      <SignIn />
    </TabPanel>
  </Tabs>
);
