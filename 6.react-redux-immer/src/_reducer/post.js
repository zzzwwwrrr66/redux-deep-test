import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const postReducer = (prevState = initialState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
    case 'ADD_POST':
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

const post = createSlice({
  name: 'post',
  initialState,
  reducers: { // 동기처리

  },
  extraReducers: { // 비동기처리

  }
})

module.exports = postReducer;