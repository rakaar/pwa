import axios from 'axios';
import baseurl from '../Config.js';

function getData(endpoint, data) {
  axios
    .get(`${baseurl}${endpoint}`, {
      params: data
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return 500;
    });
}

function postData(endpoint, data) {
  axios
    .post(`${baseurl}${endpoint}`, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return 500;
    });
}

let connectBackend = {
  getData,
  postData
};

export default connectBackend;
