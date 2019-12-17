import React, {Component} from 'react';
import './SkillsSideDrawer.css';
import Skill from "./Skill";

class SkillsSideDrawer extends Component {
  //outputting lists
  state = {
    skills: [
      {id: 1, name: 'Laravel', score: 3},
      {id: 2, name: 'PHP', score: 3},
      {id: 3, name: 'Wordpress Plugins', score: 3},
      {id: 4, name: 'ReactJS', score: 2},
      {id: 5, name: 'ReactStrap', score: 3},
      {id: 6, name: 'JavaScript', score: 2},
      {id: 7, name: 'HTML, Css, Sass', score: 1},
      {id: 8, name: 'ui, adobe xd', score: 1},
      {id: 9, name: 'Docker, Linux Admin', score: 1},
    ]
  };

  SearchSkillHandler = (id) => {
    console.log(id);
  };

  render() {
    let drawerClasses = ['side-drawer'];

    if (this.props.show) {
      drawerClasses.push('open');
    }

    return (
      <nav className={drawerClasses.join(' ')}>
        <ul>
          {this.state.skills.map((skill, id) => (
            <li key={skill.name}>
              <Skill
                name={skill.name}
                score={skill.score}
                click={() => this.SearchSkillHandler(id)}/>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default SkillsSideDrawer;