import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import ProviderIndexPage from "./ProviderIndexPage";
import ProviderShowPage from "./ProviderShowPage";
import ProviderNewPage from "./ProviderNewPage";
import ProviderUpdatePage from "./ProviderUpdatePage";
import DishIndexPage from "./DishIndexPage";
import DishShowPage from "./DishShowPage";
import UserNewPage from "./UserNewPage";
import SignInPage from "./SignInPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" component={WelcomePage} />
          <Route exact path="/dishes" component={DishIndexPage} />
          <Route exact path="/dishes/:id" component={DishShowPage} />
          <Route exact path="/user/new" component={UserNewPage} />
          <Route exact path="/session/new" component={SignInPage} />
          <Switch>
            <Route exact path="/providers" component={ProviderIndexPage} />
            <Route exact path="/providers/new" component={ProviderNewPage} />
            <Route exact path="/providers/:id" component={ProviderShowPage} />
            <Route
              path="/providers/update/:id"
              component={ProviderUpdatePage}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
