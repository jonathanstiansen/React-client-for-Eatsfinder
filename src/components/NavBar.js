import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/providers">Providers</Link>
      <Link to="/providers/new">New Provider</Link>
    </nav>
  );
}

export default NavBar;
