import React from 'react';
import styled from 'styled-components';

const BoldBar = styled.div`
  width: 225px;
  height: 31px;
  margin: 17px auto auto 0;
  background-color: #1F290D;
  position: absolute;
  right: 329.5px;
`;

const BeginnerBar = styled(BoldBar)`
  width: calc(225px * 0.33);
`;

const MediateBar = styled(BoldBar)`
  width: calc(225px * 0.66);
`;

const ExpertBar = styled(BoldBar)`
  width: calc(225px * 1);
`;

const ThinBar = styled.div`
  width: 356px;
  height: 0;
  right: 0;
  margin-top: 32.5px;
  border-bottom : 0.5px solid #1F290D;
  position: absolute;
`;

const Skill = (props) => {
  let BarStyle;
  switch (props.score) {
    case 3:
      BarStyle=<ExpertBar/>;
      break;
    case 2:
      BarStyle=<MediateBar/>;
      break;
    case 1:
      BarStyle=<BeginnerBar/>;
      break;
  }
  return (
    <div style={{
      // border : '1px solid #1F290D',
      height: '45px',
      width: '554.5px',
      fontSize: '30px',
    }}>
      {BarStyle}
      <ThinBar>
        <p style={{
          width: '100%',
          marginTop: '-38px',
          textAlign: 'center',
          position: 'absolute',
        }}>
          {props.name}
        </p>
      </ThinBar>
    </div>
  )
};

export default Skill;