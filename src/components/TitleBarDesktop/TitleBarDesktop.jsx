import React               from "react";
import { ReactComponent as Logo }               from "Assets/logo-nobg-sm.svg";
import NavList             from "Components/NavList/NavList";
import { Link }            from "react-router-dom";
import { SITE_TITLE_DESKTOP, SITE_SUBTITLE }      from "Source/constants";
import classes             from "./TitleBarDesktop.less";

/**
 * Displays the heading for the page. The format of the heading is effected by
 * the viewport.
 */
const TitleBarDesktop = (props) => {
  return (
    <header className={ classes.TitleBar }>
      <span><Link to="/" onClick={ props.drawerCloser }><Logo className={ classes.logo } /></Link></span>
      <span onClick={ props.drawerCloser } className={ classes.titleContainer }>
        <div className={ classes.title }>{ SITE_TITLE_DESKTOP }</div>
        <div className={ classes.subtitle }>{ SITE_SUBTITLE }</div>
      </span>
      <NavList />
    </header>
  );
};

export default TitleBarDesktop;