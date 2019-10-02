import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/RespNav.scss';

/*eslint-disable*/
export default function RespNav(props) {
  // const [userLoggedIn, setUserLoggedIn] = useState(false);

  const showModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const showHiringModal = () => {
    document.getElementById('id03').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };
  const closeHiringModal = () => {
    document.getElementById('id03').style.display = 'none';
  };
  useEffect(() => {
    // if (localStorage.getItem('loginToken') != null) setUserLoggedIn(true);
    //   if (localStorage.getItem('loginToken') != null) setUserLoggedIn(true);
  });

  // setUsernameOnHome(localStorage.getItem('username'));
  // const onLogout = () => setUserLoggedIn(false);
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

  return (
    <Fragment>
      <div id='id02' class='w3-modal'>
        <div class='w3-modal-content w3-animate-top w3-card-4'>
          <header class='w3-container w3-black'>
            <span
              onClick={closeModal}
              className='w3-button w3-display-topright'
            >
              X
            </span>
            <h2>Support U</h2>
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

      <div id='id03' class='w3-modal'>
        <div class='w3-modal-content w3-animate-top w3-card-4'>
          <header class='w3-container w3-black'>
            <span
              onClick={closeHiringModal}
              className='w3-button w3-display-topright ccmcb'
            >
              X
            </span>
            <h2> &nbsp; </h2>
          </header>

          <div className='support-model'>
            <h1>We love talented people like you</h1>
            <div class='separator line-separator'>♦</div>
            <div className='sm-f'>
              <div className='l'>
                <h2>Product</h2>
                <h3>
                  We are always looking out for motivated individuals to expand
                  our products; reach out to us at{' '}
                  <a
                    href='mailto:utkarsh.sinha@iit-techambit.in'
                    target='blank'
                  >
                    utkarsh.sinha@iit-techambit.in
                  </a>
                </h3>
              </div>
              <div className='r'>
                <h2>Editorial</h2>
                <h3>
                  We love our pen-knights more than our products; to get some of
                  that love, contact us at{' '}
                  <a
                    href='mailto:suraj.iyyengar@iit-techambit.in'
                    target='blank'
                  >
                    suraj.iyyengar@iit-techambit.in
                  </a>
                </h3>
              </div>
              <div className='b'>
                <h2>Technology</h2>
                <h3>
                  If you love solving challenging technical problems reach out
                  to us at{' '}
                  <a href='mailto:shivam.jha@iit-techambit.in' target='blank'>
                    shivam.jha@iit-techambit.in
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='res-nav'>
        <nav class='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a href='/' style={{ color: 'black' }}>
              <img
                alt='IIT Tech Ambit Logo'
                src='https://cdn.iit-techambit.in/websiteAssets/logo.png'
                className='logo'
              />
              <h2 className='nav-lt'></h2>
            </a>

            <a
              role='button'
              class='navbar-burger burger'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </a>
          </div>

          <div id='navbarBasicExample' class='navbar-menu'>
            <div className='navbar-end'>
              <div
                className='navbar-item hiring-anim'
                onClick={showHiringModal}
              >
                <h5>WE ARE HIRING</h5>
              </div>
              <div className='navbar-item' onClick={showModal}>
                <h5> PUBLICISE RESEARCH</h5>
              </div>
              {/* <div className='navbar-item'> */}
              {/* <TagsModal /> */}
              {/* <CustomTagsButton /> */}
              {/* </div> */}
              <div className='navbar-item'>
                <h5 className='issues-btn'>
                  <Link className='nh2' to='/issues'>
                    ISSUES
                  </Link>
                </h5>
              </div>
              {/* <div className='navbar-item'>
                {userLoggedIn ? (
                  <UserDropdown
                    username={localStorage.getItem('username')}
                    onLogout={onLogout}
                  />
                ) : (
                  <AuthModal />
                )}
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
