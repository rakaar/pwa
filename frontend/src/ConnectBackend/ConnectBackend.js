import axios from 'axios';
import config from '../Config.js';

function getData(endpoint, data) {
  axios
    .get(config.baseurl + endpoint, {
      params: data
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('err in getDAta is ', err);
      return 500;
    });
}

function postData(endpoint, data) {
  axios
    .post(config.baseurl + endpoint, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('err in postData is ', err);
      return 500;
    });
}

let connectBackend = {
  getData,
  postData
};

export default connectBackend;
