const { createStore } = require('redux');

const reducer = (prevState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        userInfo: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        userInfo: null,
      };
    case 'ADD_POST':
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  userInfo: null,
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => { // react-redux 안에 들어있어요. // debugr 할때 사용 
  console.log('changed'); // 화면 바꿔주는 코드 여기서
});

// login, logout, post

console.log('1st', store.getState());

const loginAction = (data) => {
  return { // action
    type: 'LOG_IN',
    data,
  };
};
const logoutAction = (data) => {
  return { // action
    type: 'LOG_OUT',
    data,
  };
};
const addPostAction = (data) => {
  return { // action
    type: 'ADD_POST',
    data,
  };
};

store.dispatch(loginAction({name: 'wooram',}));
console.log('2nd', store.getState());

store.dispatch(addPostAction({name: store.getState().userInfo.name, atCreated: new Date().getTime(), info: 'test post111111'}));
store.dispatch(addPostAction({name: store.getState().userInfo.name, atCreated: new Date().getTime(), info: 'test post222222'}));
console.log('3nd', store.getState());

store.dispatch(logoutAction());
console.log('4nd', store.getState());
