const { createAsyncThunk } = require('@reduxjs/toolkit');

const getSome = (time, value) => {
  return new Promise((resolve, rejected)=>{
    setTimeout(()=>{
      resolve(value);
    },time);
  });
}

const asyncTestAction = createAsyncThunk('test/asyncTest', async (data, thunkAPI) => {
  // thunkAPI.getState() <== 실행중 getState 가능
  console.log(data)
  return await getSome(500, {
    id: '1',
    name: 'wooram'
  });
});

module.exports = asyncTestAction;