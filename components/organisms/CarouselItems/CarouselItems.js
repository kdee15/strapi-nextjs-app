import React from "react";
import classes from "./CarouselItems.module.scss";

function CarouselItems(props) {
  const { title, image, copy } = props.contentModule;
  return (
    <section className={`container`}>
      <div className={classes.oContent}>
        {title}
        <img src={`http://localhost:1337${image.url}`} alt={title} className={`a-responsive-image`}/>
        {copy}
      </div>
    </section>
  )
}

export default CarouselItems;