import React from 'react';

export class Reactionsbar extends React.Component {
  state = {
    isLoading: true,
    title: '',
    content: '',
    author: '',
    error: false
  };

  updateLikes = () => {
    console.log(this.state.id);
  };

  updateDislikes = () => {};

  render() {
    return (
      <div className='main-w'>
        <span className='title'>Did you like this post?</span>

        <div className='reactions-w'>
          <button>😄</button>
          <br />
          <span> 19 </span>
        </div>
        <div className='reactions-w'>
          <button>😞</button>
          <br />
          <span> 11 </span>
        </div>
        <style jsx>
          {`
            .reactions-w {
              display: inline-block;
              text-align: center;
            }
            .reactions-w span {
              text-align: center;
              color: #778;
              font-weight: 800;
              font-size: 1.2em;
            }
            button {
              cursor: pointer;
              border: 0;
              background: #fff;
              margin: 10px 0 0 0;
              padding: 0.5em 1em;
              font-size: 2em;
              color: #fff;
              font-weight: 700;
              border-radius: 6px;
              transition: all ease-in 0.3s;
              transform: translateY(2px) scale(1);
              transform-origin: center;
            }
            button:hover {
              transform: translateY(-3px) scale(1.1);
            }
            button:focus,
            button:target,
            button:active {
              outline: none;
            }
            .title {
              display: block;
              font-size: 1.6em;
              font-weight: 800;
              color: #445;
            }
            .main-w {
              padding: 2em 0;
              text-align: center;
              position: relative;
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
              background: #fff;
              border: 3px solid #4ca9e3;
              border-radius: 10px;
              margin-bottom: 70px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Reactionsbar;
