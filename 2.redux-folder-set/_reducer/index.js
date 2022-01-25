const { combineReducers }  = require('redux');
const userReduver = require('./user');
const postReducer = require('./post');

module.exports = combineReducers({
  userInfo: userReduver,
  posts: postReducer,
})