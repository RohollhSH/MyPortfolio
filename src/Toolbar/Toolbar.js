import React from 'react';
import './Toolbar.css';
import {Link} from "react-router-dom";

const Toolbar = props => {

  return(
    <header className='toolbar'>
    <nav className='toolbar_navigations'>
      <div className='toolbar__title'>
        <a
          href='/'
          style={{
            fontWeight: 'bold',
            fontSize: '2.5rem',
            margin: '0',
          }}
        >
          Rohollah Shahbazi
        </a>
        <p
          style={{
            fontSize: '1.5rem',
            marginTop: '15px',
          }}
        >
          Backend / Frontend developer from Iran, Kermanshah
        </p>
      </div>
      <div className='spacer'/>
      <div className='toolbar_navigation_items'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-works">My Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact-me">Contact me</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)};

export default Toolbar;