import React, { useEffect } from 'react';

import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes, Navigate} from "react-router-dom"
import { auth } from './fireBase/fireBase';
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from './features/userSlice';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./pages/NotFound/NotFound"


function App() {
  // console.log('first');
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
      <ToastContainer theme='dark' />
      <Routes>
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
</div>
  );
}

export default App;
