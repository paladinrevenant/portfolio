import React from "react";
import image from "Assets/300x400.png";
// import classes from "./Welcome.less";

/**
 * This component is the welcome section for the site. It is the first section
 * that the user will see upon vising the site.
 */
const Welcome = () => (
  <>
    Hi, my name is Mike and this is my portfolio.
    <img src={image} />
  </>
);

export default Welcome;