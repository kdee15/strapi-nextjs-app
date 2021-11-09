const { BLOG_API_ENDPOINT } = require("../../helpers/config");

export default function Podcasts({ Podcast }) {
  return (
    <article>
      <h1>{Podcast.Title}</h1>
    </article>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${BLOG_API_ENDPOINT}/podcasts`);
  const Podcasts = await res.json();

  const paths = Podcasts.map((Podcast) => ({
    params: { slug: Podcast.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(`${BLOG_API_ENDPOINT}/Podcasts?slug=${slug}`, {
    method: "GET",
    headers,
  });
  const data = await res.json();
  const Podcast = data[0];
  return {
    props: { Podcast },
  };
}
