import React   from "react";
import classes from "./SkillTab.less";

const skillTab = (props) => (
  <span className={ [classes.SkillTab, props.open ? classes.open : null].join(" ") } onClick={ props.clickHandler }>{ props.label }</span>
);

export default skillTab;