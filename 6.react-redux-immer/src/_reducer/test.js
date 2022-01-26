import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: { // 동기처리
    test(state, action) {
      state = true;
    }
  },
  extraReducers: { // 비동기처리

  }
})

module.exports = testSlice;