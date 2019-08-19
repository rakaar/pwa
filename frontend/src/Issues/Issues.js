import React from 'react';
import IssueCard from './IssueCard';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/Issues.scss';

export default function Issues() {
  return (
    <div className='issues-container'>
      <div className='issue-item'>
        <IssueCard />
      </div>
      <div className='issue-item'>
        <IssueCard />
      </div>
      <div className='issue-item'>
        <IssueCard />
      </div>
      <div className='issue-item'>
        <IssueCard />
      </div>
    </div>
  );
}
