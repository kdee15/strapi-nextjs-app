import React from "react";
import Layout from "../components/Layout";
import { fetchQuery } from "../helpers/utils";
const { BASE_URL } = require("../helpers/config");
import {ServicesCarousel} from "../components/organisms/ServicesCarousel/ServicesCarousel";
import { PodcastsCard } from "../components/organisms/PodcastsCard/PodcastsCard";
import classes from "../styles/Home.module.scss";

export default function Home({ Pages, Podcasts, Services }) {
  // console.log('pages:', Pages);
  const headerBlock = Pages[0].blocks[0];
  return (
    <Layout title="Homepage" description="Podcasts Website Homepage">
      <div className={classes.oHomePage}>
        <section className={`${classes.oHeroBlock} hero__${headerBlock.theme}`} style={{ backgroundImage: `url(${BASE_URL}${headerBlock.background_image.url})`}}>
          <div className={`container`}>
            <div className={`${classes.oContentRow} row`}>
              <figure className={`${classes.oImageBlock} col-12 col-md-4 offset-md-8`}>
                <img className={`a-responsive-image`} src={`${BASE_URL}${headerBlock.image.url}`} />
              </figure>
            </div>
          </div>
        </section>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 col-md-6`}>
              {Podcasts.map((Podcast, index, array) => {
                if (array.length - 1 === index) {
                  return (
                    <article className="oPodcastItem" key={Podcast.id}>
                      <PodcastsCard Podcast={Podcast} />
                    </article>
                  )
                }
              })}
            </div>
            <div className={`col-12 col-md-6`}>


            </div>
          </div>

        </div>
        <ServicesCarousel Services={Services}/>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const Podcasts = await fetchQuery("Podcasts");
  const Pages = await fetchQuery("Pages");
  const Services = await fetchQuery("Services");
  return {
    props: {
      Podcasts,
      Pages,
      Services,
    },
  };
}
