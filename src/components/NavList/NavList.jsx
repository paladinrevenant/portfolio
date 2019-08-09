import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavList.less";

const NavList = (props) => (
  <nav className={ classes.NavList }>
    <ul>
      <li>
        <Link to="/" onClick={props.drawerCloser}>Home</Link>
      </li>
      <li>
        <Link to="/skills/" onClick={props.drawerCloser}>Skills</Link>
      </li>
      <li>
        <Link to="/me/" onClick={props.drawerCloser}>About Me</Link>
      </li>
    </ul>
  </nav>
);

export default NavList;