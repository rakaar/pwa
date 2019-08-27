const baseurl = 'https://api.iit-techambit.in/';
const issuecdn = 'https://cdn.iit-techambit.in/issue/';
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
    getAll: 'post/getAll',
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
    getAll: 'issues/getAll'
  }
};

let config = {
  baseurl,
  endpoints,
  issuecdn
};

export default config;
