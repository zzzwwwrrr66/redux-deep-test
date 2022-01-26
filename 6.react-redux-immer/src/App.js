import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logIn, logOut} from './_action/user';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  
  useEffect(() => {
    console.log( 'user stateData ',user , ' posts ', ); 
    return () => {
    }
  }, [user]);

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

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
