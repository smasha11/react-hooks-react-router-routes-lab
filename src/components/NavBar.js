import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  margin: "0 10px",
  textDecoration: "none",
  color: "blue",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
