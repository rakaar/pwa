import React from 'react';

import connectBackend from '../ConnectBackend/ConnectBackend';
import config from '../Config';

export class Reactionsbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      title: '',
      content: '',
      author: '',
      error: false
    };
  }

  rateArticle = score => {
    // let id = this.props.match.params.id;
    // connectBackend.postData(config.endpoints.article.postRate, { score });
  };

  updateLikes = () => {
    console.log(this.state.id);
  };

  updateDislikes = () => {};

  render() {
    return (
      <div className='main-w-rb'>
        <span className='title'>Did you like this post?</span>

        <div className='reactions-w'>
          <button className='rcb' onClick={this.rateArticle(1)}>
            😡
          </button>
          <br />
          <span> 3 </span>
        </div>
        <div className='reactions-w'>
          <button className='rcb' onClick={this.rateArticle(2)}>
            😞
          </button>
          <br />
          <span> 8 </span>
        </div>
        <div className='reactions-w'>
          <button className='rcb' onClick={this.rateArticle(3)}>
            😐
          </button>
          <br />
          <span> 10 </span>
        </div>
        <div className='reactions-w'>
          <button className='rcb' onClick={this.rateArticle(4)}>
            😊
          </button>
          <br />
          <span> 11 </span>
        </div>
        <div className='reactions-w'>
          <button className='rcb' onClick={this.rateArticle(5)}>
            😍
          </button>
          <br />
          <span> 10 </span>
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
            .rcb {
              cursor: pointer;
              border: 0;
              background: transparent;
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
            .rcb:hover {
              transform: translateY(-3px) scale(1.1);
            }
            .rcb:focus,
            .rcb:target,
            .rcb:active {
              outline: none;
            }
            .title {
              display: block;
              font-size: 1.6em;
              font-weight: 800;
              color: #445;
            }
            .main-w-rb {
              padding: 2em 0;
              text-align: center;
              position: relative;
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
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
