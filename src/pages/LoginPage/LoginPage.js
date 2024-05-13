import React, { useState } from 'react'
import "./logIn.css"
import netflix_logo from "../../assets/images/logo.png"

import SignUpPage from "../SignUpPage/SignUpPage"
const LoginPage = () => {

    // ` We have a signIn state false and if it clicked it will be true and render signUp page

    const[signIn,setSignIn] = useState(false)

  return (
    <div className='logIn'>
        <div className='logIn_background'>
            <img 
            className='logIn_logo'
            src={netflix_logo} 
            alt="netflix_logo" />

            <button 
            onClick={()=>setSignIn(true)}
            className='logIn-button'>
                Sign In
            </button>

            <div className="logIn_gradient"/>

        </div>

        <div className="logIn_body">
            {/* Here we have a condition if signIn is true it will render SignUp page and signIn will be true if the button get  clicked */}
            {signIn?(
                <SignUpPage/>
            ):(
<>
              <h1>Unlimited films, TV Programs and more</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="logIn_input">
                <form>
                  <input 
                  className="logIn_inputEmail"
                  type="email" 
                  placeholder="Email address"
                  />
                  <button 
                  onClick={()=>setSignIn(true)}
                  className="logIn_inputButton">Get Started</button>
                </form>
              </div>

            </>
            )}
            

        </div>

    </div>
  )
}

export default LoginPage

