import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./header.css"
import netflix_Logo from "../../assets/images/logo.png"
import avatar_img from "../../assets/images/avatar.png"

const SimpleHeader = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
  
    const handleTransition = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleTransition);
      return () => {
        window.removeEventListener("scroll", handleTransition);
      };
    }, []);
  
    return (
      <header className={`nav flexSB ${show && "nav_backGround"}`}>
        <div className="container flexSB">
          <nav className='flexSB'>
            <div className="logo">
              <img
                onClick={() => navigate("/")}
                className='nav_logo'
                src={netflix_Logo}
                alt="Netflix logo"
              />
            </div>
            <div className="account flexSB">
              <img
                onClick={() => navigate("/profile")}
                className='nav_avatar'
                src={avatar_img}
                alt=""
              />
            </div>
          </nav>
        </div>
      </header>
    );
}

export default SimpleHeader