import React from 'react';
import { Navbar, NavItem, Dropdown, Divider } from 'react-materialize';
import AuthModal from '../Auth/Modal';
import TagsModal from '../Tags/TagsModal';
import '../Styles/Navbar.scss';

export default function Nav() {
  return (
    <Navbar brand={<a />} alignLinks='right'>
      <h5 id='logo-title'>IIT Tech Ambit</h5>
      <NavItem>
        <TagsModal />
      </NavItem>
      <NavItem>
        <h5>Issues</h5>
      </NavItem>
      <NavItem>
        <AuthModal />
      </NavItem>
    </Navbar>
  );
}
