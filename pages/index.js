import Layout from "../components/Layout";
import { fetchQuery } from "../helpers/utils";
import { PodcastsCard } from "../components/PodcastsCard";

export default function Home({ Podcasts }) {
  console.log(Podcasts);
  return (
    <Layout title="Homepage" description="Podcasts Website Homepage">
      <section className="o-block-podcasts">
        <div className="container">
          <div className="row">
            {Podcasts.map((Podcast) => (
              <article className="col-12 col-md-3">
                <PodcastsCard key={Podcast.Title} Podcast={Podcast} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const Podcasts = await fetchQuery("Podcasts");
  return {
    props: {
      Podcasts,
    },
  };
}
