// const baseurl = 'http://10.145.113.217:3000/';
const baseurl = 'http://1bf85109.ngrok.io/';
const endpoints = {
  user: {
    getFollowedTags: 'user/followedTags',
    getFeed: 'user/getFeed',
    getPayment: 'user/get_payment',
    postPayment: 'user/payment',
    postInfoUpdate: 'user/update',
    getUser: 'user',
    getSavedArticles: 'user/savedArticles'
  },

  auth: {
    postLogin: 'auth/login',
    getLogout: 'auth/logout',
    postSignUp: 'auth/signup',
    postForgotPassword: 'auth/reset/request'
  },
  article: {
    getByTags: 'post/by_tags',
    postCreate: 'post/create',
    postRate: 'post/rate',
    postSave: 'post/save',
    postuploadImg: 'post/uploadImg',
    getPost: 'post'
  },
  tag: {
    getAll: 'tag/getAll',
    postPriority: 'tag/setPriority'
  },

  issue: {
    getAll: 'issue/getAll'
  }
};

let config = {
  baseurl,
  endpoints
};

export default config;
