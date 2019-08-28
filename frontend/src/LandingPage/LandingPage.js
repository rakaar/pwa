import React from 'react';
import Card from './Card';
import Workflow from './Workflow';
import Team from './Team';

import '../Styles/Card.scss';
import '../Styles/LandingPage/LandingPage.scss';

export default function LandingPage() {
  const showModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };
  return (
    <div>
      <div id='id01' class='w3-modal'>
        <div class='w3-modal-content w3-animate-top w3-card-4'>
          <header class='w3-container w3-black'>
            <span
              onClick={closeModal}
              className='w3-button w3-display-topright'
            >
              X
            </span>
            <h2>Support Us</h2>
          </header>
          <div class='w3-container'>
            <h2>Donate</h2>
            <h3>
              Donate will have a description, “For donations please reach out to
              us at abhijeet@vgsom.iitkgp.ac.in”
            </h3>
            <h2>Contribute</h2>
            <h3>
              Contribute will have the description, “Want us to cover your
              research? Have an article to contribute? Don’t think! Reach us now
              at connect@iit-techambit.in”
            </h3>
          </div>
        </div>
      </div>

      <div class='section section-header'>
        <div class='parallax filter filter-color-white'>
          <div
            class='image'
            style={{
              backgroundImage: `url('https://cdn.iit-techambit.in/websiteAssets/front.jpg')`
            }}
          ></div>
          <div class='container'>
            <div class='content'>
              <div class='title-area has-text-centered'>
                <h1 class='title-modern'>IIT Tech Ambit</h1>
                <h2>
                  Subscribe for free to read about research and technology
                  breakthroughs happenings in the IIT ecosystem
                </h2>
                <div class='separator line-separator'>♦</div>
              </div>

              <div class='button-get-started'>
                <a
                  href='http://www.creative-tim.com/product/gaia-bootstrap-template'
                  target='_blank'
                  class='btn btn-white btn-fill btn-lg '
                >
                  About us
                </a>
                <a href='/issues' class='btn btn-white btn-fill btn-lg '>
                  Start Reading
                </a>
                <a
                  onClick={showModal}
                  target='_blank'
                  class='btn btn-white btn-fill btn-lg '
                >
                  Support Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section section-header'>
        <div class='parallax filter filter-color-white'>
          <div
            class='image'
            style={{
              backgroundImage: `url('https://cdn.iit-techambit.in/websiteAssets/iitkgp.jpg')`
            }}
          ></div>
          <div className='container'>
            <div className='row'>
              <div className='title-area'>
                <h2>IIT Kharagpur invests in IIT Tech Ambit</h2>
                <div className='separator separator-danger'>✻</div>
                <p className='description'>
                  We'd like to announce that IIT Kharagpur has made an
                  investment in Tech Ambit, which will help us further our
                  efforts in our mission of making research and tech innovations
                  accessible to India as a whole. Funding amount to be set at
                  1.2 million rupees.
                </p>
              </div>
            </div>
            <div className='cards'>
              <div className='columns'>
                <div className='column'>
                  <Card num='10+' description='issues' />
                </div>
                <div className='column'>
                  <Card num='50+' description='articles' />
                </div>
                <div className='column'>
                  <Card
                    num='10+'
                    description='distinguished guest interviews'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Workflow />
        <Team />
      </div>
    </div>
  );
}
