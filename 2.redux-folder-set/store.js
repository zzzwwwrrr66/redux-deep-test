const { createStore, applyMiddleware, compose } = require('redux');
const reducer = require('./_reducer');
const { loginAction, logoutAction } = require('./_action/user');
const { addPostAction } = require('./_action/post');

const initialState = {
  userInfo: null,
  posts: [],
};
const thunkMiddleware = (store) => (dispatch) => (action) => {
  if(typeof action === 'funtion') {

  }
  return dispatch(action);
}

const firstMiddleware = (store) => (dispatch) => (action) => {
  // 기능추가 Before Action
  console.log('Before Action',store.getState(),' action ', action);
  dispatch(action);

  // 기능추가 After Action
  console.log('After Action', store.getState());

}
// compose => 여러기능을 합쳐주는 함수 
/* const enhancer = compose(
  applyMiddleware(firstMiddleware),
  devtool
)
*/
const enhancer = applyMiddleware(firstMiddleware);



const store = createStore(reducer, initialState, enhancer);
store.subscribe(() => { // react-redux 안에 들어있어요. // debugr 할때 사용 
  console.log('changed'); // 화면 바꿔주는 코드 여기서
});


// ==============================================================================
// login, logout, post
// ==============================================================================

console.log('1st', store.getState());
store.dispatch(loginAction({name: 'wooram',}));
// console.log('2nd', store.getState());

// store.dispatch(addPostAction({name: store.getState().userInfo.name, atCreated: new Date().getTime(), info: 'test post111111'}));
// store.dispatch(addPostAction({name: store.getState().userInfo.name, atCreated: new Date().getTime(), info: 'test post222222'}));
// console.log('3nd', store.getState());

// store.dispatch(logoutAction());
// console.log('4nd', store.getState());



