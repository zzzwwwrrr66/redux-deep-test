const initialState = null;

const userReducer = (prevState = initialState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
    case 'LOG_IN':
      return action.data;
    case 'LOG_OUT':
      return null
    default:
      return prevState;
  }
};

module.exports = userReducer;