import React, {Component} from 'react';
import classes from './SkillsNav.module.css';
import Skill from "./Skill";
import Backdrop from "../UI/Backdrop";

class SkillsNav extends Component {
  state = {
    skills: [
      {name: 'Laravel & Lumen', score: 3},
      {name: 'PHP', score: 3},
      {name: 'Wordpress & Plugins', score: 3},
      {name: 'Frontend', score: 2},
      {name: 'React, Redux, ReactStrap', score: 2},
      {name: 'Linux Admin, Docker', score: 1},
    ],
    skillsClicked: false,
  };

  switchSkillsTabHandler = () => {
    this.setState({
      skillsClicked: !this.state.skillsClicked
    });
  };

  //collapsed skills before click
  SkillsButton = <div
    className={classes.SkillsButton}
    onClick={this.switchSkillsTabHandler}
  >
    Skills
  </div>;

  //opened skills after click
  SkillsTab =
    <ul className={classes.SkillsList}>
      <li>
        <Skill
          name={this.state.skills[0].name}
          score={this.state.skills[0].score}
        />
      </li>
      <li>
        <Skill
          name={this.state.skills[1].name}
          score={this.state.skills[1].score}
        />
      </li>
    </ul>;

  render() {


    return (
      <nav>
        {this.state.skillsClicked ?
          <Backdrop click={this.switchSkillsTabHandler}/> :
          null}
        {this.state.skillsClicked ?
          this.SkillsTab :
          this.SkillsButton}
      </nav>
    )
  }
}

export default SkillsNav;