import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./styles.module.css";
import { HotelList } from "@components/HotelList";
import { SortBy } from "@components/SortBy";

const queryClient = new QueryClient();

export function Results() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className={styles.results}>
      <SortBy />
      <HotelList />
    </div>
    </QueryClientProvider>
  );
}
