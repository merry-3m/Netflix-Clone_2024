import React, { useEffect, useState } from 'react'
import netflix_Logo from "../../assets/images/logo.png"
import avatar_img from "../../assets/images/avatar.png"
import "./header.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Header = () => {
    // ` To handle the transition of header 
    const[show,setShow] = useState(false)

    const [mobile,setMobile] = useState(false)

    // ` To navigate into different path when the avatar logo is clicked
    const navigate = useNavigate()


    // ` When we scroll it will trigger the handleTransition function and show or hide the navbar based on scrolling
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
    // container flexSb
    <header className={`nav flexSB ${show && "nav_backGround"}`}> 
       <div className="container flexSB">
       <nav className='flexSB'>   

        <div className="logo">
            <img
        // ` So when i click logo it goes back to home page
        onClick={()=>navigate("/")}

        className='nav_logo'
        src={netflix_Logo} alt="Netflix logo" />
        </div>

            <ul
             className={mobile? "navMenu_list":"flexSB"}
             onClick={()=>setMobile(false)}
             >
            <Link to = "/">Home</Link>
                <Link to = "https://www.netflix.com/browse/genre/83">TVShows</Link>
                <Link to = "https://www.netflix.com/browse/genre/34399">Movies</Link>
                <Link to = "https://www.netflix.com/latest">Latest</Link>
                <Link to = "https://www.netflix.com/browse/my-list">MyList</Link>
                <Link to = "https://www.netflix.com/browse/original-audio">Browse by Languages</Link>
            </ul>
            
            <button
            onClick={()=>setMobile(!mobile)}
             className="toggle">
                {mobile?<i className='fa fa-times'></i>:<i className='fa fa-bars'></i> }
                
            </button>

        <div className="account flexSB">
        <i className='fa fa-search'></i>
        <i className='fa fa-bell'></i>
        {/* <i className='fa fa-user'></i> */}
           

        </div>
        <img 
    onClick={()=>navigate("/profile") }
    className='nav_avatar'
    src={avatar_img} alt="" />





    </nav>

       </div>
        


    </header>
  )
}

export default Header