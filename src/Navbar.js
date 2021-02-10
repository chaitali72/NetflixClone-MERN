import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [show ,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.screenY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
        
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
          <img className="img_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"  
          alt="netflix logo"></img>
           
          <img className="profile_logo" 
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
          alt="netflix profile logo">
         
          </img>
          </div>
    )
}

export default Navbar
