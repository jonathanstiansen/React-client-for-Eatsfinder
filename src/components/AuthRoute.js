import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Authenticate } from "./Authenticator";

const AuthRoute = props => {
  const { redirect = true, render, component: Component, ...restProps } = props;

  return (
    <Authenticate>
      {authProps => {
        const { user, loading } = authProps;

        if (loading) return null;

        if (user === null && redirect) {
          return <Redirect to="/session/new" />;
        } else {
          return (
            <Route
              render={routeProps => (
                <Component {...routeProps} auth={authProps} />
              )}
              {...restProps}
            />
          );
        }
      }}
    </Authenticate>
  );
};

export default AuthRoute;
