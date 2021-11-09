import Link from "next/link";
import { baseUrl } from "../helpers/utils";

export function PodcastsCard({ Podcast }) {
  return (
    <div className="o-card">
      <figure className="m-card-image">
        <img
          className="a-responsive-image"
          src={`${baseUrl}${Podcast.cover_image.url}`}
          alt={Podcast.Title}
        />
      </figure>
      <div className="m-card-body">
        <Link key={Podcast.Title} href={`/podcasts/${Podcast.slug}`}>
          <a className="flex flex-col overflow-hidden mt-6">
            <h4 className="mt-3">
              {Podcast.Title}
            </h4>
          </a>
        </Link>
      </div>
    </div>
  );
}
