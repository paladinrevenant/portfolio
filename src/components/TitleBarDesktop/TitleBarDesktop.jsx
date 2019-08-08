import React               from "react";
import Logo                from "Assets/logo-nobg-sm.svg";
import { faBars }          from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link }            from "react-router-dom";
import { SITE_TITLE_DESKTOP, SITE_SUBTITLE }      from "Source/constants";
import classes             from "./TitleBarDesktop.less";

/**
 * Displays the heading for the page. The format of the heading is effected by
 * the viewport.
 */
const titleBarDesktop = (props) => {
  return (
    <header className={ classes.TitleBar }>
      <span><Link to="/" onClick={ props.drawerCloser }><Logo className={ classes.logo } /></Link></span>
      <span onClick={ props.drawerCloser } className={ classes.titleContainer }>
        <div className={ classes.title }>{ SITE_TITLE_DESKTOP }</div>
        <div className={ classes.subtitle }>{ SITE_SUBTITLE }</div>
      </span>
      <span onClick={ props.menuClickHandler } className={ classes.menu }><FontAwesomeIcon icon={ faBars } /></span>
    </header>
  );
};

export default titleBarDesktop;