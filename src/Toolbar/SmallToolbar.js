import React from "react";
import "./SmallToolbar.css";
import {Link} from 'react-router-dom';

const SmallToolbar = props => {
  return(
    <nav className='SmallToolbar'>
      <div className="toolbar-navigation-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-works">My Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact-me">Contact me</Link></li>
        </ul>
      </div>
    </nav>
  )
};

export default SmallToolbar;