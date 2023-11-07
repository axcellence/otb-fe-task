import { Hotel } from "@components/Hotel";
import styles from "./styles.module.css";
import { useHotels } from "../../hooks/use-hotels";

export function HotelList() {
  const { data, error, isLoading } = useHotels();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Something went wrong</div>;
  }

  return (
    <section className={styles.hotelList}>
      {data.map((hotel) => (
        <Hotel key={hotel.title} hotel={hotel} />
      ))}
    </section>
  );
}
