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
import { Authenticator, Authenticate } from "./Authenticator";
import AuthRoute from "./AuthRoute";

class App extends Component {
  render() {
    return (
      <Authenticator>
        <Router>
          <div className="App">
            <Authenticate>{props => <NavBar auth={props} />}</Authenticate>
            <Route path="/" component={WelcomePage} />
            <Switch>
              <AuthRoute
                exact
                redirect={false}
                path="/session/new"
                component={SignInPage}
              />
              <Route exact path="/user/new" component={UserNewPage} />
              <AuthRoute Route exact path="/dishes" component={DishIndexPage} />
              <Route exact path="/dishes/:id" component={DishShowPage} />
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
      </Authenticator>
    );
  }
}

export default App;
