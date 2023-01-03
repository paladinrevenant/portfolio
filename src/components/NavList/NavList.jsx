import React from "react";
import { 
    BrowserRouter,
    Routes,
    Link } from "react-router-dom";
import classes from "./NavList.less";

const NavList = (props) => (
    <nav className={ classes.NavList }>
            <ul>
                <li>
                    <Link to="/" onClick={props.clickHandler}>Home</Link>
                </li>
                <li>
                    <Link to="/skills/" onClick={props.clickHandler}>Skills</Link>
                </li>
                <li>
                    <Link to="/me/" onClick={props.clickHandler}>About Me</Link>
                </li>
            </ul>
    </nav>
);

export default NavList;