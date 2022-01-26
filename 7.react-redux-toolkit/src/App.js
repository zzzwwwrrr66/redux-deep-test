import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logIn, logOut} from './_action/user';

const testSlice = require('./_reducer/test');
const asyncTestAction = require('./_action/test');

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  const test = useSelector((state)=>state.test);
  
  useEffect(() => {
    dispatch(testSlice.actions.test('payloadTest'));
    return () => {
    }
  }, [user]);

  useEffect(() => {
    console.log( 'user stateData ',test , ' posts ', ); 
    return () => {
    }
  }, [test]);

  const onClick = () => {
    console.log('clicked');
    dispatch(logIn(
      {
        id: 1,
        name: 'zerocho',
        admin: true,
      }
    ));
  }

  const logOutClick = () => {
    dispatch(logOut());
  }

  const asyncTest = () => {
    dispatch(asyncTestAction('asd'));
  }
  
  return (
    <div className="App">
      <h2>h2h2h2</h2>
      {
        user.data === null ? (
          `please login...`
        ) : (
          user.data.nickname
        )
      }
      <button onClick={onClick}>LOGIN</button>

      <br/>
      <br/>

      <button onClick={logOutClick}>LOGOUT</button>

      <br/>
      <br/>

      <button onClick={asyncTest}>asyncTestAction</button>
    </div>
  );
}

export default App;
