import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export default class MyUploader extends Component {
  render() {
    return (
      <ImagesUploader
        url='https://localhost:9090/notmultiple'
        optimisticPreviews
        multiple={false}
        onLoadEnd={err => {
          if (err) {
            console.error(err);
          }
        }}
        label={<b className='propic-label'>Change profile pic</b>}
      />
    );
  }
}
