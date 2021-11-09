import React from "react";
import classes from "../Hero/Hero.module.scss";

function Hero(props) {
  const { contentModule } = props;
  return (
    <section key={`${contentModule.__component}-${contentModule.id}`} className={classes.oHeroBlock}>
      <img className={classes.kdWow} src={`http://localhost:1337${contentModule.background_image.url}`} />
    </section>
  )
}

export default Hero;