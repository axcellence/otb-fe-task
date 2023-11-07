import { useQuery } from "@tanstack/react-query";
import { schemas } from "@schemas/index";
import { wait, sortData } from "@utils/helpers";
import { useSortStore } from "@stores/sort-store";

export function useHotels() {
  const { sortBy } = useSortStore();

  const res = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      // Artificial delay
      await wait(500);
      // Mock API call
      const res = await import("@data/hotels.json");
      // Validate and parse data
      return schemas.hotels.parse(res.data);
    },
  });

  return {
    ...res,
    data: res.data ? sortData(res.data, sortBy) : res.data,
  };
}
