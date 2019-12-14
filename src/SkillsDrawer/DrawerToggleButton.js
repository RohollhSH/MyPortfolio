import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
  <button className="toggle_button" onClick={props.click}>
    Skills
  </button>
);

export default DrawerToggleButton;