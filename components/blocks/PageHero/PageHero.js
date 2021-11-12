import React from "react";
import classes from "../PageHero/PageHero.module.scss";

function PageHero(props) {
  const { contentModule } = props;
  return (
    <section key={`${contentModule.__component}-${contentModule.id}`} className={classes.oPageHeroBlock}>
      <figure className={classes.oBackgroundBlock}>
        <img className={classes.kdWow} src={`http://localhost:1337${contentModule.image.url}`} />
      </figure>
      <div className={`container`}>
        <div className={`row`}>
          <h1 className={classes.aTitle}>{contentModule.title}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageHero;