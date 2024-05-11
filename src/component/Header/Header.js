import React, { useEffect, useState } from 'react'
import netflix_Logo from "../../assets/images/logo.png"
import avatar_img from "../../assets/images/avatar.png"
import "./header.css"

const Header = () => {
    // ` To handle the transition of header 
    const[show,setShow] = useState(false)

    const handleTransition = () =>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

   
    useEffect (()=>{
        // ` When we scroll it will trigger the handleTransition function
        window.addEventListener("scroll",handleTransition)
        return () => {         window.removeEventListener("scroll",handleTransition)
        }
    },[])
  return (
    <div className={`nav ${show && "nav_backGround"}`}>
        <div className='nav_contents'>   

        <img 
        className='nav_logo'
        src={netflix_Logo} alt="Netflix logo" />

        <img 
        className='nav_avatar'
        src={avatar_img} alt="" />

        </div>


    </div>
  )
}

export default Header