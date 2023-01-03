import React   from "react";
import NavList from "Components/NavList/NavList";
import classes from "./SideDrawer.less";

/**
 * Holds navigation and settings information. Hidden until requested.
 */
const SideDrawer = (props) => {
  // Rather than being conditionally rendered, the class list is switched around to support animation
  const classList = [classes.SideDrawer, props.isOpen ? classes.open : classes.closed];

  return (
    <div className={classList.join(" ")}>
      <h2>Menu</h2>
      <NavList clickHandler={ props.drawerCloser }/>
    </div>
  );
};

export default SideDrawer;