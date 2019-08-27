import axios from 'axios';
import config from '../Config.js';

async function getData(endpoint, data) {
  return await axios
    .get(config.baseurl + endpoint, {
      params: data
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('err in getData is ', err);
      return 500;
    });
}

async function postData(endpoint, data) {
  return await axios
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
