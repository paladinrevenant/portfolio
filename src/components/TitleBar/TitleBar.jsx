import React               from "react";
import Logo                from "Assets/logo-nobg.svg";
import { faBars }          from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uniqueId }        from "lodash";
import { VIEWS }           from "Source/constants";
import { SITE_TITLE }      from "Source/constants";
import classes             from "./TitleBar.less";

/**
 * Displays the heading for the page. The format of the heading is effected by
 * the viewport.
 */
const titleBar = (props) => {
  const logo       = <Logo className={classes.logo} key={uniqueId()} />;
  const title      = <span key={uniqueId()}>{ SITE_TITLE }</span>;
  const menuButton = <span key={uniqueId()} onClick={props.menuClickHandler} className={classes.menu}><FontAwesomeIcon icon={faBars} /></span>;

  const headerItems = props.view === VIEWS.DESKTOP ? [logo, title, menuButton] :
                                                     [menuButton, title, logo];

  return (
    <header className={classes.TitleBar}>{headerItems}</header>
  );
};

export default titleBar;