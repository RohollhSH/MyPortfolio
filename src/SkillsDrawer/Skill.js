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
  }

  return (
    <div style={{
      // border : '1px solid #1F290D',
      height: '45px',
      width: '554.5px',
      fontSize: '30px',
    }}>
      <div className={SkillBorder.join(' ')}/>
      <div className="ThinBar"/>
        <p style={{
          width: '100%',
          marginTop: '-38px',
          textAlign: 'center',
          position: 'absolute',
        }}>
          {props.name}
        </p>
    </div>
  )
};

export default Skill;