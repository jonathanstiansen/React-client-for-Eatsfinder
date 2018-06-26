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
      <Link to="/">Home</Link>
      <Link to="/dishes">Dishes</Link>
      <Link to="/providers">Providers</Link>
      <Link to="/providers/new">New Provider</Link>
      <Link to="/user/new">Sign Up</Link>
      <Link to="/session/new">Sign In</Link>
      <a href="#" onClick={signOut}>
        Sign Out
      </a>
    </nav>
  );
}

export default NavBar;
