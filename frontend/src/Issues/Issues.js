import React from 'react';
import IssueCard from './IssueCard';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/Issues.scss';

export default function Issues() {
  return (
    <div className='issues-container'>
      <div className='issue-item'>
        <IssueCard issue='June 2019'/>
      </div>
      <div className='issue-item'>
        <IssueCard issue='May 2019'/>
      </div>
      <div className='issue-item'>
        <IssueCard issue='April 2019'/>
      </div>
      <div className='issue-item'>
        <IssueCard issue='March 2019'/>
      </div>
    </div>
  );
}
