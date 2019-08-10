import React from 'react';

export class SinglePost extends React.Component {

  render() {
      return (
        <div className='post-w'>
          <h1> Making MERN stack apps </h1>
          <div className='info-w'>Ajay Yadav . 28/07 . 58 Views</div>
          <div className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            *culpa qui officiale ***deserunt mollit anim id est laborum
          </div>

          <style jsx>
            {`
              .post-w {
                padding: 2em 0;
                font-family: Open Sans;
                background: transparent;
                text-align:left;
              }
              h1 {
                color: #363636;
                font-size: 3.2em;
                font-weight: 800;
              }
              .info-w {
                font-size: 0.9em;
                display: block;
                padding: 0 0 1em 0;
                color: #96969f;
                font-weight: 700;
              }

              .content {
                margin-top: 1em;
                padding-top: 30px;
                border-top: 4px solid #f6f6f6;
              }
            `}
          </style>
        </div>
      );
    
  }
}

export default SinglePost;
