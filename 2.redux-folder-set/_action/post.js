const addPostAction = (data) => {
  return { // action
    type: 'ADD_POST',
    data,
  };
};

module.exports = {
  addPostAction
}