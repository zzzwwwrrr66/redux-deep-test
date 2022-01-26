const {createSlice} = require('@reduxjs/toolkit');

const asyncTestAction = require('../_action/test');

const initialState = {
  test: null,
  data: {
    id: null,
    name: null,
  },
loading: false,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: { // 동기처리
    test(state, action) {
      state.test = true;
    }
  },
  extraReducers: (builder) => builder
    .addCase(asyncTestAction.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(asyncTestAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(asyncTestAction.rejected, (state, action) => {
      state.error = action.payload;
    })
})

module.exports = testSlice;