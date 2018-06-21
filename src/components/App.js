import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import ProviderIndexPage from "./ProviderIndexPage";
import ProviderShowPage from "./ProviderShowPage";
import NavBar from "./NavBar";
import ProviderNewPage from "./ProviderNewPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={WelcomePage} />

          <Switch>
            <Route exact path="/providers" component={ProviderIndexPage} />
            <Route exact path="/providers/new" component={ProviderNewPage} />
            <Route exact path="/providers/:id" component={ProviderShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
