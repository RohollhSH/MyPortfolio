import React, {Component} from 'react';
import './App.css';
import HeaderBar from "./HeaderBar/HeaderBar";
import SkillsNav from "./SkillsNav/SkillsNav";

class App extends Component {


  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <SkillsNav/>
      </div>
    );
  }
}

export default App;
