import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import ProviderShowPage from "./ProviderShowPage";
import ProviderIndexPage from "./ProviderIndexPage";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/providers" component={ProviderIndexPage} />
          <Route exact path="/provider" component={ProviderShowPage} />
        </div>
      </Router>
    );
  }
}

export default App;
