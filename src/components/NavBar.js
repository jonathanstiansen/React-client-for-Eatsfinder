import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/providers">
        Providers
      </NavLink>
      <NavLink exact to="/provider">
        Provider
      </NavLink>
    </nav>
  );
}

export default NavBar;
