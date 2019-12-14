import React from 'react';
import './SkillsSideDrawer.css';
import Skill from "./Skill";

const SkillsSideDrawer = props => {
  let drawerClasses = ['side-drawer'];

  if (props.show){
    drawerClasses.push('open');
    console.log(drawerClasses)
  }

  return (<nav className={drawerClasses.join(' ')}>
    <ul>
      <Skill score='3' name='Laravel' />
      <Skill score='1' name='ReactJS' />
    </ul>
  </nav>)
};

export default SkillsSideDrawer;