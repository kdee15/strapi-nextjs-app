import React from "react";
import classes from "../Footer/Footer.module.scss";
function Footer(props) {
  const { contentModule } = props;
  return (
    <div className={classes.oFooter}>
      <div className={`container`}>
      <h1>Hello</h1>
      </div>

    </div>

  );
}

export default Footer;