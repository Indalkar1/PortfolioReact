import "./FooterStyle.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
               <div className="location">
                
                <FaHome size={20} style={{color:
                    "#fff" , marginRight: "2rem"}} />
                    <div>
                    <p>Nandegaon,Ambajogai,Beed</p>
                    <p>Maharastra,India</p>
                    </div>
                    
                   
                </div> 

                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff" , marginRight: "2rem"}}/>
                    +91 9372470426
                    </h4>

                </div>

                <div className="email">
                    <h4>
                  <FaMailBulk size={20} style={{color:"#fff" , marginRight: "2rem"}}/>  
                    indalkarsamiksha@gmail.com
                    </h4>

                </div>
            </div>
            
            <div className="right">
                <h4>About Me</h4>
                <p>I am A Software Engineer. I had worked on Android,Web development,Machine learning.I like to overcome challenges.</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff" , marginRight: "1rem"}}/>  
                <FaTwitter size={20} style={{color:"#fff" , marginRight: "1rem"}}/>  
                <FaLinkedin size={20} style={{color:"#fff" , marginRight: "1rem"}}/>  
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer