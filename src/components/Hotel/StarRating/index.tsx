import { StarIcon } from "lucide-react";
import styles from "./styles.module.css";

type StarRatingProps = {
  rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: rating }).map((_, index) => (
        <StarIcon
          key={index}
          style={{
            fill: "var(--yellow)",
            stroke: "var(--yellow)",
          }}
          size={16}
        />
      ))}
    </div>
  );
}
