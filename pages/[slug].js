const { BLOG_API_ENDPOINT } = require("../helpers/config");
import DynamicBlocks from "../components/blocks/DynamicBlocks";

export default function Pages({ Page }) {
  return (
    <section>
      <h1>{Page.slug}</h1>
      {/* <p>{Page.block.title}</p> */}
      <section className="flexible-content-modules">
        { Page.blocks ? Page.blocks.map((contentModule, index) => (
          <DynamicBlocks key={contentModule.__component + contentModule.id} contentModule={contentModule}  />
        )): null }
      </section>
    </section>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${BLOG_API_ENDPOINT}/Pages`);
  const Pages = await res.json();

  const paths = Pages.map((Page) => ({
    params: { slug: Page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`${BLOG_API_ENDPOINT}/Pages?slug=${slug}`);
  const data = await res.json();
  const Page = data[0];

  return {
    props: { Page },
  };
}
