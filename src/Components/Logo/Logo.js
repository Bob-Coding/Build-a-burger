import React from "react";
import burgerlogo from "../Assets/Pictures/burger-logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerlogo} alt="burgerLogo" />
  </div>
);

export default logo;
