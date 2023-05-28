import "./FormStyles.css";

import React from 'react'

const form = () => {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Description</label>
            <textarea rows="6" placeholder="Type your description here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default form