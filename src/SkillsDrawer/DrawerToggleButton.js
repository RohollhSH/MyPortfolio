import React from 'react';
import './DrawerToggleButton.css';

/**
 * @return {null}
 */
function DrawerToggleButton(props) {
  let classes = ["toggle_button"];

  if (props.show) {
    classes.push("show")
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={props.click}>
      Skills
    </button>
  )
}

export default DrawerToggleButton;