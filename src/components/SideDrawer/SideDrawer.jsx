import React   from "react";
import { Link } from "react-router-dom";
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
      <nav>
        <ul>
          <li>
            SideDrawer
          </li>
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
    </div>
  );
};

export default SideDrawer;