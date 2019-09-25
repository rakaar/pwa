import React from 'react';

export class SinglePost extends React.Component {
  render() {
    return (
      <div className='post-w'>
        <h1> {this.props.title} </h1>
        <div className='info-w'>
          {this.props.author}|{this.props.time}
        </div>
        <div className='content'>{this.props.body}</div>

        <style jsx>
          {`
            .post-w {
              padding: 2em 0;
              font-family: Open Sans;
              background: transparent;
              text-align: left;
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
