import React from 'react';
import './Skill.css';

const Skill = (props) => {
  let SkillBorder = ['BoldBar'];

  switch (props.score) {
    case 1:
      SkillBorder.push('BeginnerBar');
      break;
    case 2:
      SkillBorder.push('MediumBar');
      break;
    case 3:
      SkillBorder.push('ExpertBar');
      break;
    default:
      SkillBorder.push('ExpertBar');
      break;
  }

  return (
    <div className="EachSkill">
      <div className={SkillBorder.join(' ')}/>
      <div className="ThinBar">
        <p>{props.name}</p>
      </div>
    </div>
  )
};

export default Skill;