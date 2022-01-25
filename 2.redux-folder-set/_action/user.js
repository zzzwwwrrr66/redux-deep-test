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

module.exports = {
  loginAction, 
  logoutAction
}


