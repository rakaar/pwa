import React, { Component } from 'react';
import '../Styles/Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <div className='footer-w'>
        <div className='lined-t'>
          <h2 className='lft'>IIT Tech Ambit</h2>
        </div>
        <div className='fg-w'>
          <div className='lg-f'>
            <p> <a href="https://cdn.iit-techambit.in/generalAssets/privacy_policy.txt" target="blank">Privacy Policy</a></p>
            <p> <a href="https://cdn.iit-techambit.in/generalAssets/tnc.txt" target="blank">Terms and Conditions</a></p>
            <p><a href="https://iit-techambit.in/#what_we_do"> About </a></p>
          </div>
          <div className='mg-f'>
            <a href='https://www.facebook.com/IIT.Technology.Ambit/'>
              <i class='fa fa-facebook-square fa-2x' aria-hidden='false' />
            </a>
            <i class='fa fa-instagram fa-2x' aria-hidden='false' />
            <a href='https://medium.com/iit-technology-ambit'>
              <i class='fa fa-medium fa-2x' aria-hidden='false' />
            </a>
            <a href='https://github.com/iit-technology-ambit/'>
              <i class='fa fa-github-square fa-2x' aria-hidden='false' />
            </a>
          </div>
          <div className='rg-f'>
            <p> IIT Kharagpur </p>
            <p> Kharagpur, 721302 </p>
            <p> wb, india </p>
            <p> +91-8969169656 </p>
            <p className='mail-ft'> devops@iit-techambit.in </p>
          </div>
        </div>
        <div className='vl-f'>
          <p className='cs-f'> Subscription Coming soon </p>
        </div>
        <div className='crt-f'> © IIT Technology Ambit 2019 </div>
      </div>
    );
  }
}

export default Footer;
