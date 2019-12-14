import React, {Component} from 'react';
import './App.css'
import Toolbar from "./Toolbar/Toolbar";
import SkillsSideDrawer from "./SkillsDrawer/SkillsSideDrawer";
import Backdrop from "./UI/Backdrop";
import DrawerToggleButton from "./SkillsDrawer/DrawerToggleButton";


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  //changing state functionally
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div style={{height: '100vh'}}>
        <Toolbar
          drawerClickedHandler={this.drawerToggleClickHandler}
        />
        <SkillsSideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{
          position: 'absolute',
          marginTop: '220px'
        }}>

          <DrawerToggleButton click={this.drawerToggleClickHandler}/>

          <p style={{color: 'white'}}>This is The page content</p>
        </main>

      </div>
    );
  }
}

export default App;
