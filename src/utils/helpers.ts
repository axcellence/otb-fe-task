import { z } from "zod";
import { schemas } from "@schemas/index";
import { SortBy } from "@stores/sort-store";

export const formatPrice = (price: number, currency = "GBP") => {
  return Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(price);
};

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function sortData(data: z.infer<typeof schemas.hotels>, sortBy: SortBy) {
  return data.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "rating") {
      return b.starRating - a.starRating;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

export function pluralise(
  count: number,
  singular: string,
  plural: string
): string {
  return count === 1 ? singular : plural;
}

export function getDateRange(startDate: Date, endDate: Date) {
  if (startDate > endDate) {
    throw new Error("Start date cannot be after end date");
  }

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const timeDifference = endDate.getTime() - startDate.getTime();
  const dayDifference = timeDifference / millisecondsPerDay;
  
  // Since the difference might not be a whole number, round it to the nearest whole number
  const roundedDayDifference = Math.round(dayDifference);

  // Handle singular and plural day difference, although the test case does not require it
  const dayText = roundedDayDifference === 1 ? 'day' : 'days';
  return `${roundedDayDifference} ${dayText}`;
}