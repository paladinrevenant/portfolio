import React               from "react";
import Logo                from "Assets/logo-nobg-sm.svg";
import { faBars }          from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link }            from "react-router-dom";
import { SITE_TITLE }      from "Source/constants";
import classes             from "./TitleBar.less";

/**
 * Displays the heading for the page. The format of the heading is effected by
 * the viewport.
 */
const titleBar = (props) => (
  <header className={ classes.TitleBar }>
    <span onClick={ props.menuClickHandler } className={ classes.menu }><FontAwesomeIcon icon={ faBars } /></span>
    <span onClick={ props.drawerCloser }>{ SITE_TITLE }</span>
    <Link to="/" onClick={ props.drawerCloser }><Logo className={ classes.logo } /></Link>
  </header>
);

export default titleBar;