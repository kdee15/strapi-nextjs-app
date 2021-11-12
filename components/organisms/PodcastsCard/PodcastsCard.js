import Link from "next/link";
import { baseUrl } from "../../../helpers/utils";
import classes from "./PodcastsCard.module.scss";

export function PodcastsCard({ Podcast }) {
  return (
    <div className={classes.oPodcastCard} key={Podcast.Title} >
      <figure className={classes.mCardImage}  style={{ backgroundImage: `url(${baseUrl}${Podcast.cover_image.url})`}}>
        <span></span>
      </figure>
      <div className="m-card-body">
        <h4 className="mt-3">
          {Podcast.Title}
        </h4>
      </div>
      <div className={`m-card-footer`}>
        <Link href={`/podcasts/${Podcast.slug}`}>
          <a>
            read more
          </a>
        </Link>
        <Link href={`${Podcast.URL}`}>
          <a target={`_blank`}>
            listen now
          </a>
        </Link>
        <Link href={`https://open.spotify.com/show/6uYibsPUFb73e4dTFuDQbm`} >
          <a target={`_blank`}>
            podcasts
          </a>
        </Link>

      </div>
    </div>
  );
}
