import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { auth } = props;
  const signOut = event => {
    event.preventDefault();
    auth.signOut();
  };

  return (
    <nav className="NavBar">
      {auth.user === null ? (
        <React.Fragment>
          <Link to="/user/new">Sign Up</Link>
          <Link to="/session/new">Sign In</Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/dishes">Dishes</Link>
          <Link to="/providers">Providers</Link>
          <Link to="/providers/new">New Provider</Link>
          <span> Hi, {auth.user.user_name}! </span>
          <a onClick={signOut}>Sign Out</a>
        </React.Fragment>
      )}
    </nav>
  );
}

export default NavBar;
