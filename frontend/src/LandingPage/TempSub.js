import React, { useState } from 'react';
import config from '../Config';
import connectBackend from '../ConnectBackend/ConnectBackend';

import '../Styles/Card.scss';
import '../Styles/LandingPage/TempSub.scss';

export default function TempSub() {
  const [mail, setMail] = useState('');

  const sendMailToBackend = () => {
    connectBackend.postData(config.endpoints.article.subscribe, {
      email: mail
    });
  };

  const showModal = () => {
    document.getElementById('id01').style.display = 'block';
    document.getElementById('overlay-blur').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
    document.getElementById('overlay-blur').style.display = 'none';
  };

  return (
    <div>
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

      <div class='section section-header intro'>
        <div class='parallax filter filter-color-white'>
          <div
            class='limage image'
            style={{
              backgroundImage: `url('https://cdn.iit-techambit.in/websiteAssets/front.jpg')`
            }}
          ></div>
          <div class='container'>
            <div class='content'>
              <div class=''>
                <h1 className='title-modern-main'>IIT Tech Ambit</h1>
                <h2 className='des-main-ff'>
                  Subscribe for free to read about research and technology
                  breakthroughs happenings in the IIT ecosystem
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section section-header skgpb'>
        <div>
          <div className='sub'>
            <h1 className='sub-txt'>Subscribe</h1>
            <input
              className='input is-rounded is-info is-large column is-two-fifths'
              type='email'
              placeholder='Enter email'
              onChange={e => setMail(e.target.value)}
            />
            <div class='field'>
              <p class='control'>
                <button
                  class='button is-rounded is-primary'
                  onClick={sendMailToBackend}
                >
                  Try It
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
