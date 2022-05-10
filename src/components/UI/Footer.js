import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.div}>
        <p className={classes.p}>© 2022 Footer Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
