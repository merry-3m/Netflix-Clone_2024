import React, { useRef, useState } from 'react'
import "./signUp.css"
import { auth } from '../../fireBase/fireBase'
// ` use useNavigate to redirect to profilePage when signIn get clicked on
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


const SignUpPage = () => {

    const [showSecondStep, setShowSecondStep] = useState(false)
// ` We use useRef to access DOM elements directly or to persist values between renders without causing re-renders.
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null);

    const navigate = useNavigate()



    const register = async (e) => {
        e.preventDefault();

        if(!showSecondStep) {
            setShowSecondStep(true)
        } else {
            try{
                const userCredential = await auth.createUserWithEmailAndPassword(
                    // nameRef.current.value,
                    emailRef.current.value,
                    passwordRef.current.value
                )
                console.log(userCredential.user);
                navigate("/profile")

            }catch(err) {
                toast.error(err.code.split("/")[1].split("-").join(" "))
            }
        }
           
    }


    const signIn = async (e) => {
        // ` to prevent page refresh
        e.preventDefault();

        // ` This function is used to sign in the already signed up user

       try {
        const userCredential = await auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        console.log(userCredential.user);
        navigate("/profile")
       } catch (err) {
        toast.error(err.code.split("/")[1].split("-").join(" "))
       }
    }

    return (
        <div className="signUp">
            <form>
                <h1>{showSecondStep ? 'Sign Up' : 'Sign In'}</h1>
                {!showSecondStep && (
                    <>
                        <input type="email" placeholder="Email" ref={emailRef} />
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        <button onClick={signIn} type="submit">Sign In</button>
                    </>
                )}
                {showSecondStep && (
                    <>
                        <input type="text" placeholder="Username" ref={nameRef} />
                        <input type="email" placeholder="Email" ref={emailRef} />
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        <button onClick={register} type="submit">Sign Up</button>
                    </>
                )}
                <div className="from-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help</p>
          </div>
                <h4>
                    <span className="signUp_grey">{showSecondStep ? 'Already have an account?' : 'New to Netflix?'}</span>
                    <span onClick={() => setShowSecondStep(!showSecondStep)} className="signUp_link">
                        {showSecondStep ? 'Sign In Now' : 'Sign Up Now'}
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpPage