import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import classes from "../ServicesCarousel/ServicesCarousel.module.scss";

export function ServicesCarousel({ Services }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  return (
    <div className={classes.oServicesBlock}>
      <div className={`container`}>
        <div className={`row no-gutters`}>
          <h2 className={classes.aBlockTitle}>EPOKOTHWENI SERVICES</h2>
          <p className={classes.aBlockDesc}>Services offered fully bilingually in English and Isixhosa according to client preference</p>
          <Slider {...settings}>
            {Services.map((Service) => (
              <div key={Service.id}>
                <h5 className={`aTitle`}>{Service.title}</h5>
                <p className={`aText a-fnt-16f`}>{Service.copy}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}