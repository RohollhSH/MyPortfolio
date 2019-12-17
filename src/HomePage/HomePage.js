import React, {Component} from "react";
import "./HomePage.css";
import Toolbar from "../Toolbar/Toolbar";
import Backdrop from "../UI/Backdrop";
import SkillsSideDrawer from "../SkillsDrawer/SkillsSideDrawer";
import DrawerToggleButton from "../SkillsDrawer/DrawerToggleButton";
import PageContent from "../PageContent/PageContent";

class HomePage extends Component {
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
        <DrawerToggleButton
          show={!this.state.sideDrawerOpen}
          click={this.drawerToggleClickHandler}
        />
        <PageContent/>
      </div>
    );
  }
}

export default HomePage;