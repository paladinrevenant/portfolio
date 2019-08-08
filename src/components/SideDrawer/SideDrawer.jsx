import React   from "react";
import NavList from "Components/NavList/NavList";
import classes from "./SideDrawer.less";

/**
 * Holds navigation and settings information. Hidden until requested.
 */
const SideDrawer = (props) => {
  // Rather than being conditionally rendered, the class list is switched around to support animation
  const classList = props.open ? [classes.SideDrawer, classes.open] :
                                 [classes.SideDrawer, classes.closed];

  return (
    <div className={classList.join(" ")}>
      <NavList />
    </div>
  );
};

export default SideDrawer;