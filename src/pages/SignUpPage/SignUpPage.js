import React, { useRef } from 'react'
import "./signUp.css"
import { auth } from '../../fireBase/fireBase'

const SignUpPage = () => {
// ` We use useRef to access DOM elements directly or to persist values between renders without causing re-renders.
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);

        }).catch((err)=> {
            alert(err.message)
        })
           
    }

    const signIn = (e) => {
        // ` to prevent page refresh
        e.preventDefault();

        // ` This function is used to sign in the already signed up user

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
            
        }).catch((error)=>{
            alert(error.message)
        });
    }
  return (
    <div className='signUp'>
        <form>
        <h1>Sign In</h1>
          <input type='email' placeholder='Email' ref={emailRef} />
          <input ref={passwordRef} type='password' placeholder='Password' />
          <button 
          onClick={signIn}
          type='submit'>Sign In</button>

          <h4>
            <span className='signUp_grey'>New to Netflix? 
            </span>
            <span 
            onClick={register}
            className='signUp_link'>Sign Up Now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpPage