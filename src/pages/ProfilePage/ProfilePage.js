import React from 'react'
import "./profile.css"
import Header from '../../component/Header/Header'
import avatar_logo from "../../assets/images/avatar.png"

import { useSelector } from'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../fireBase/fireBase'
import PlanPage from '../PlanPage/PlanPage'

const ProfilePage = () => {

    //` To access user email
    const user = useSelector(selectUser)

  return (
    <div className='profilePage'>
        <Header/>

        <div className="profilePage_body">
            <h1>Edit Profile</h1>
            <div className="profilePage_info">
                <img 
                src={avatar_logo}
                alt="" />

                <div className="profilePage_details">
                      <h2>{user.email}</h2>
                      <div className="profilePage_plans">
                        <h3>Plans</h3>
                        <PlanPage/>


                        <button
                        onClick={()=>auth.signOut()}
                        // ` This onclick will go to app.js and check the onchange if the user is null it will log out and the log out function is inside userSlice.js and if user is null it will take us to loginPage
                         className='profilePage_signOut'
                         >Sign Out </button>
                      </div>
                 </div>
            </div>
        </div>

    </div>
  )
}

export default ProfilePage