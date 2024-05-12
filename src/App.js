import React, { useEffect } from 'react';

import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes} from "react-router-dom"
import { auth } from './fireBase/fireBase';
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from './features/userSlice';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';


function App() {
  // ` We can access the user from userSlice redux
  const user = useSelector(selectUser)

  const dispatch = useDispatch()


  //` useEffect which will listen the user login state and if the user is logged in then it will redirect to the home page else it will redirect to the login page`
  
  // * the useEffect will be based on dispatch
  useEffect(()=> {
   const unSubscribe =  auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //* Logged in 
        console.log(userAuth);
        dispatch (login({
          uid: userAuth.uid,
          email: userAuth.email
          }))
      } else {
        // * Logged Out

        dispatch(logout())

      }

    })

    return unSubscribe
  },[dispatch])

  return (
    <div className="App">
  <Routes>
    {!user ? (
      <Route path="/" element={<LoginPage />} />
    ) : (
      <React.Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfilePage />} />
      </React.Fragment>
    )}
  </Routes>
</div>
  );
}

export default App;
