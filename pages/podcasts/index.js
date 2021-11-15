import React from "react";
import Link from "next/link";
const { BASE_URL } = require("../../helpers/config");
import { fetchQuery } from "../../helpers/utils";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import { PodcastsCard } from "../../components/organisms/PodcastsCard/PodcastsCard";
import PageHero from "../../components/blocks/PageHero/PageHero";
import classes from "../podcasts/Podcasts.module.scss";

export default function PodcastList({ Pages, Podcasts }) {
  const headerBlock = Pages[2].blocks[0];
  return (
    <Layout title="Podcasts" description="Podcasts Landing Page">
      <div className={classes.oPodcastsPage}>
        {/*PAGE HERO BLOCK*/}
        <PageHero contentModule={headerBlock}></PageHero>
        {/*END: PAGE HERO BLOCK*/}
        <section className={`o-podcast-listings`}>
          <section className="o-block-podcasts">
            <div className="container">
              <div className="row">
                {Podcasts.map((Podcast) => (
                  <article className="col-12 col-md-6 col-lg-3" key={Podcast.id}>
                    <PodcastsCard Podcast={Podcast} />
                  </article>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const Podcasts = await fetchQuery("Podcasts");
  const Pages = await fetchQuery("Pages");
  return {
    props: {
      Podcasts,
      Pages,
    },
  };
}
