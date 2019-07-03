import React   from "react";
import classes from "./Backdrop.less";

/**
 * This component obscures the main page when only certain UI elements should be interactable
 */
const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clickHandler}></div> : null
);

export default backdrop;