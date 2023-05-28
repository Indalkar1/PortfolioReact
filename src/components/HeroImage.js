import "./HeroImageStyles.css";import React from 'react'
import IntroImg from "../assets/introbg.jpg";
import { Link } from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="into-img" src ={IntroImg}  alt="IntroImg"/>
        </div>

        <div className="content">
          <p>HELLO, I'M SAMIKSHA INDALKAR.</p>
          <h1>Software Developer</h1><br></br>
       

        <div>
           <Link to="/project" className="btn">Projects</Link> 
           <Link to="/contact" className="btn-light" >Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImage