import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = props => (
  <header className={classes.toolbar}>
    <nav className={classes.toolbar_navigations}>
      <div className={classes.toolbar__title}>
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '2.5rem',
            margin: '0'
          }}
        >
          Rohollah Shahbazi
        </p>
        <p
          style={{
            fontSize: '1.5rem',
            marginTop : '15px',
          }}
        >
          Backend / Frontend developer from Iran, Kermanshah
        </p>
      </div>
      <div className={classes.spacer}/>
      <div className={classes.toolbar_navigation_items}>
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>

);

export default Toolbar;