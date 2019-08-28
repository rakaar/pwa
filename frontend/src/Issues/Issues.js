import React, { useState, useEffect } from 'react';
import IssueCard from './IssueCard';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/Issues.scss';

export default function Issues() {
  // the  array of issues from backend
  const [issuesArr, SetIssuesArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await connectBackend.getData(config.endpoints.issue.getAll, {});
      console.log('res.data is ', res.data.resource);
      SetIssuesArr(res.data.resource);
      console.log('issuesArr is ', issuesArr);
    };
    fetchData();
  }, []);

  return (
    <div className='issues-container'>
      {issuesArr.map(item => {
        return (
          <div className='issue-item'>
            <IssueCard
              cover={item.cover_link}
              id={item.id}
              month={item.month}
              year={item.year}
              link={item.link}
            />
          </div>
        );
      })}
    </div>
  );
}
