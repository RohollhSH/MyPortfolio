import React from 'react';
import classes from './HeaderBar.module.css';

const HeaderBar = () => {
  return(
    <header>
      <div className={classes.Blur}>
      </div>

      <div className={classes.Header}>
        <div>
          <p className={classes.Name}>
            Rohollah Shahbazi
          </p>
          <p className={classes.Title}>
            Backend / Frontend developer from Iran, Kermanshah
          </p>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">My Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact me</a></li>
        </ul>
      </div>
    </header>
  )
};

export default HeaderBar;