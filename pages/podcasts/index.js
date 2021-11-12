import { fetchQuery } from "../../helpers/utils";
import { PodcastsCard } from "../../components/organisms/PodcastsCard/PodcastsCard";
import PageHero from "../../components/blocks/PageHero/PageHero";

export default function PodcastList({ Podcasts }) {
  return (
    <section className={`o-podcast-listings`}>
      <section className="o-block-podcasts">
        <div className="container">
          <div className="row">
            {Podcasts.map((Podcast) => (
              <article className="col-12 col-md-3" key={Podcast.id}>
                <PodcastsCard Podcast={Podcast} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
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
