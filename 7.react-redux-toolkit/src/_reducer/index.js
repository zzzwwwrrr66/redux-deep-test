const { combineReducers } = require('redux');
const userReducer = require('./user');
const postReducer = require('./post');
const testSlice = require('./test');

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
  test: testSlice.reducer,
});