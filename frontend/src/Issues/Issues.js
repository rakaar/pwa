import React, { useState, useEffect } from 'react';
import IssueCard from './IssueCard';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

import '../Styles/Issues.scss';

export default function Issues() {
  // the  array of issues from backend
  const [issuesArr, SetIssuesArr] = useState([]);

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
    document.getElementById('overlay-blur').style.display = 'none';
  };

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
      <div id='overlay-blur'></div>

      <div id='id01' class='w3-modal'>
        <div class='w3-modal-content w3-animate-top w3-card-4'>
          <header class='w3-container w3-black'>
            <span
              onClick={closeModal}
              className='w3-button w3-display-topright ccmcb'
            >
              X
            </span>
            <h2> &nbsp; </h2>
          </header>

          <div className='support-model'>
            <h1>Thank you for your consideration!</h1>
            <div class='separator line-separator'>♦</div>
            <div className='sm-f'>
              <div className='l'>
                <h2>Donate</h2>
                <h3>
                  For donations please reach out to us at{' '}
                  <a href='mailto:abhijeet@vgsom.iitkgp.ac.in' target='blank'>
                    abhijeet@vgsom.iitkgp.ac.in
                  </a>
                </h3>
              </div>
              <div className='r'>
                <h2>Contribute</h2>
                <h3>
                  Want us to cover your research? Have an article to contribute?
                  Don’t think! Reach us now at{' '}
                  <a href='mailto:connect@iit-texhambit.in' target='blank'>
                    connect@iit-techambit.in
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='spaningrid'>
        <h1 className='issues-title'>Our Issues Till Date</h1>
        <div class='separator line-separator spaningrid'>♦</div>
      </div>
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
