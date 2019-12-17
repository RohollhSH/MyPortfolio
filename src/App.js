import React, {Component} from 'react';
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ContactMePage from "./ContactMePage/ContactMePage";
import MyWorksPage from "./MyWorksPage/MyWorksPage";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/Contact-me">
              <ContactMePage />
            </Route>
            <Route path="/My-Works">
              <MyWorksPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
