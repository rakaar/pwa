import React from 'react';
import '../Styles/LandingPage/LandingPage.scss';

import Card from './Card';
export default function LandingPage() {
  const showModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };
  return (
    <div>
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
                Donate will have a description, “For donations please reach out
                to us at abhijeet@vgsom.iitkgp.ac.in”
              </h3>
              <h2>Contribute</h2>
              <h3>
                Contribute will have the description, “Want us to cover your
                research? Have an article to contribute? Don’t think! Reach us
                now at connect@iit-techambit.in”
              </h3>
            </div>
          </div>
        </div>

        <div class='section section-header'>
          <div class='parallax filter filter-color-red'>
            <div
              class='image'
              style={{
                backgroundImage: `url('https://cdn.iit-techambit.in/websiteAssets/front.jpg')`
              }}
            ></div>
            <div class='container'>
              <div class='content'>
                <div class='title-area'>
                  <p>Beta</p>
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
                    href='http://www.creative-tim.com/product/gaia-bootstrap-template'
                    target='_blank'
                    class='btn btn-white btn-fill btn-lg '
                  >
                    Support Us
                  </a>
                </div>
              </div>

              <div class='button-get-started'>
                <a
                  href='http://www.creative-tim.com/product/gaia-bootstrap-template'
                  target='_blank'
                  class='btn btn-white btn-fill btn-lg '
                >
                  About us
                </a>
                <a
                  href='http://www.creative-tim.com/product/gaia-bootstrap-template'
                  target='_blank'
                  class='btn btn-white btn-fill btn-lg '
                >
                  Start Reading
                </a>
                <a
                  target='_blank'
                  class='btn btn-white btn-fill btn-lg'
                  onClick={showModal}
                >
                  Support Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='section'>
        <div class='container'>
          <div class='row'>
            <div class='title-area'>
              <h2>IIT Kharagpur invests in IIT Tech Ambit</h2>
              <div class='separator separator-danger'>✻</div>
              <p class='description'>
                We'd like to announce that IIT Kharagpur has made an investment
                in Tech Ambit, which will help us further our efforts in our
                mission of making research and tech innovations accessible to
                India as a whole. Funding amount to be set at 1.2 million
                rupees.
              </p>
            </div>
          </div>
          <div class='cardlist'>
            <div class='cards'>
              <div class='row'>
                <div class='col-md-4'>
                  <Card num='50+' description='Articles' />
                </div>
                <div class='col-md-4'>
                  <Card num={'10+'} description='Issues' />
                </div>
                <div class='col-md-4'>
                  <Card num='50+' description='Articles' />
                </div>
              </div>
            </div>
            <h3>Music</h3>
            <p class='description'>
              We like to present the world with our work, so we make sure we
              spread the word regarding our clothes.
            </p>
          </div>
        </div>
        <div class='section section-our-team-freebie'>
          <div class='parallax filter filter-color-black'>
            <div
              class='image'
              style={{ backgroundImage: 'assets/img/header-2.jpeg' }}
            ></div>
            <div class='container'>
              <div class='content'>
                <div class='row'>
                  <div class='title-area'>
                    <h2>Who We Are</h2>
                    <div class='separator separator-danger'>✻</div>
                    <p class='description'>
                      We promise you a new look and more importantly, a new
                      attitude. We build that by getting to know you, your needs
                      and creating the best looking clothes.
                    </p>
                  </div>
                </div>

                <div class='team'>
                  <div class='row'>
                    <div class='col-md-10 col-md-offset-1'>
                      <div class='row'>
                        <div class='col-md-4'>
                          <div class='card card-member'>
                            <div class='content'>
                              <div class='avatar avatar-danger'>
                                <img
                                  alt='...'
                                  class='img-circle'
                                  src='assets/img/faces/face_1.jpg'
                                />
                              </div>
                              <div class='description'>
                                <h3 class='title'>Tina</h3>
                                <p class='small-text'>CEO / Co-Founder</p>
                                <p class='description'>
                                  I miss the old Kanye I gotta say at that time
                                  I’d like to meet Kanye And I promise the power
                                  is in the people and I will use the power
                                  given by the people to bring everything I have
                                  back to the people.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='col-md-4'>
                          <div class='card card-member'>
                            <div class='content'>
                              <div class='avatar avatar-danger'>
                                <img
                                  alt='...'
                                  class='img-circle'
                                  src='assets/img/faces/face_4.jpg'
                                />
                              </div>
                              <div class='description'>
                                <h3 class='title'>Andrew</h3>
                                <p class='small-text'>Product Designer</p>
                                <p class='description'>
                                  I miss the old Kanye I gotta say at that time
                                  I’d like to meet Kanye And I promise the power
                                  is in the people and I will use the power
                                  given by the people to bring everything I have
                                  back to the people.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='col-md-4'>
                          <div class='card card-member'>
                            <div class='content'>
                              <div class='avatar avatar-danger'>
                                <img
                                  alt='...'
                                  class='img-circle'
                                  src='assets/img/faces/face_3.jpg'
                                />
                              </div>
                              <div class='description'>
                                <h3 class='title'>Michelle</h3>
                                <p class='small-text'>Marketing Hacker</p>
                                <p class='description'>
                                  I miss the old Kanye I gotta say at that time
                                  I’d like to meet Kanye And I promise the power
                                  is in the people and I will use the power
                                  given by the people to bring everything I have
                                  back to the people.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='section section-our-clients-freebie'>
          <div class='container'>
            <div class='title-area'>
              <h5 class='subtitle text-gray'>Here are some</h5>
              <h2>Clients Testimonials</h2>
              <div class='separator separator-danger'>∎</div>
            </div>

            <ul class='nav nav-text' role='tablist'>
              <li class='active'>
                <a href='#testimonial1' role='tab' data-toggle='tab'>
                  <div class='image-clients'>
                    <img
                      alt='...'
                      class='img-circle'
                      src='assets/img/faces/face_5.jpg'
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href='#testimonial2' role='tab' data-toggle='tab'>
                  <div class='image-clients'>
                    <img
                      alt='...'
                      class='img-circle'
                      src='assets/img/faces/face_6.jpg'
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href='#testimonial3' role='tab' data-toggle='tab'>
                  <div class='image-clients'>
                    <img
                      alt='...'
                      class='img-circle'
                      src='assets/img/faces/face_2.jpg'
                    />
                  </div>
                </a>
              </li>
            </ul>

            <div class='tab-content'>
              <div class='tab-pane active' id='testimonial1'>
                <p class='description'>
                  And I used a period because contrary to popular belief I
                  strongly dislike exclamation points! We no longer have to be
                  scared of the truth feels good to be home In Roman times the
                  artist would contemplate proportions and colors. Now there is
                  only one important color... Green I even had the pink polo I
                  thought I was Kanye I promise I will never let the people
                  down. I want a better life for all!
                </p>
              </div>
              <div class='tab-pane' id='testimonial2'>
                <p class='description'>
                  Green I even had the pink polo I thought I was Kanye I promise
                  I will never let the people down. I want a better life for
                  all! And I used a period because contrary to popular belief I
                  strongly dislike exclamation points! We no longer have to be
                  scared of the truth feels good to be home In Roman times the
                  artist would contemplate proportions and colors. Now there is
                  only one important color...
                </p>
              </div>
              <div class='tab-pane' id='testimonial3'>
                <p class='description'>
                  {' '}
                  I used a period because contrary to popular belief I strongly
                  dislike exclamation points! We no longer have to be scared of
                  the truth feels good to be home In Roman times the artist
                  would contemplate proportions and colors. The 'Gaia' team did
                  a great work while we were collaborating. They provided a
                  vision that was in deep connection with our needs and helped
                  us achieve our goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
