import React               from "react";
import { uniqueId }        from "lodash";
import { faStar }          from "@fortawesome/free-solid-svg-icons";
import { faStarHalf }      from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes             from "./SkillRow.less";

const SkillRow = (props) => {
  let stars = [];

  for (let a = 0; a < Math.trunc(props.rating/2); a++) {
    stars.push(<FontAwesomeIcon key={ uniqueId() } icon={ faStar } color="#starGradient"/>);
  }

  if (props.rating%2) {
    stars.push(<FontAwesomeIcon key={ uniqueId() } icon={ faStarHalf } />);
  }

  const rowClasses = [classes.SkillRow, props.selected ? classes.selected : null];

  return (
    <div className={ rowClasses.join(" ") } onClick={props.clickHandler}>
      <span className={classes.label}>{ props.label }</span>
      <span className={classes.rating}>{stars}</span>
    </div>
  );
};

export default SkillRow;