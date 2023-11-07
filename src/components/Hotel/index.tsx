import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { z } from "zod";
import { schemas } from "@schemas/index";
import styles from "./styles.module.css";
import { formatPrice } from "@utils/helpers";
import { StarRating } from "./StarRating";
import { Attendees } from "./Attendees";
import { Dates } from "./Dates";

export function Hotel({ hotel }: { hotel: z.infer<typeof schemas.hotel> }) {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <article className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <figure className={styles.hotelImageWrapper}>
          <img src={hotel.image} alt="hotel image" />
          <button
            onClick={() => {
              setOpenDetails(!openDetails);
            }}
            data-active={openDetails ? "true" : null}
          >
            <span>
              {openDetails ? (
                <strong>Read less</strong>
              ) : (
                <strong>Read more</strong>
              )}{" "}
              about this hotel
            </span>
            <ChevronDownIcon />
          </button>
        </figure>
        <div className={styles.details}>
          <h2 className={styles.title}>{hotel.title}</h2>
          <p className="styles.location">{hotel.location}</p>
          <section>
            <StarRating rating={hotel.starRating} />
            <Attendees attendees={hotel.attendees} />
            <Dates dates={hotel.dates} />
          </section>
          <p>departing from <strong>{hotel.departingAirport.name}</strong></p>
          <button className={styles.bookNow}>
            Book now
            <div className={styles.price}>{formatPrice(hotel.price)}</div>
          </button>
        </div>
      </div>
      <div className={styles.overview} data-open={openDetails ? "true" : null}>
        <div>
          <div>
            <h3>Overview</h3>
            <p>{hotel.overview}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
