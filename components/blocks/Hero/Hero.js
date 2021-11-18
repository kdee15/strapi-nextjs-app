import React from "react";
import Image from "next/image";
import classes from "../Hero/Hero.module.scss";
import {BASE_URL} from "../../../helpers/config";
import ReactMarkdown from "react-markdown";

function Hero(props) {
  const { contentModule } = props;
  return (
  <section className={`${classes.oHeroBlock} hero__${contentModule.theme}`} style={{ backgroundImage: `url(${BASE_URL}${contentModule.background_image.url})`}}>
    <div className={`container`}>
      <div className={`${classes.oContentRow} row`}>
        <div className={`${classes.oContentBlock} col-12 col-md-6 offset-md-6 col-12 col-lg-7 offset-lg-5`}>
          <figure className={classes.mImage}>
            <Image
              className={`${classes.aImage} a-responsive-image`}
              src={`${BASE_URL}${contentModule.image.url}`}
              alt={`site logo`}
              width={contentModule.image.width}
              height={contentModule.image.height}
            />
          </figure>
          <ReactMarkdown className={`${classes.aText} a-fnt-18f`}>{contentModule.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero;