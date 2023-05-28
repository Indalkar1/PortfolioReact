import "./workCardStyles.css";
import {NavLink} from "react-router-dom";
import React from 'react';

const workCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="zaa" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">VIEW</NavLink>
                        <NavLink to={props.view} className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
};

export default workCard;