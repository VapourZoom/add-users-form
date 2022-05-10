import React from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.navigation}>
      <p className={classes.p}>Navigation</p>
      <link href="%PUBLIC_URL%/user-icon-transparent.png"></link>
    </nav>
  );
};

export default Navigation;
