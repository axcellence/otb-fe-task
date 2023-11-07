import { hotelSchema } from "./hotels-schema";

export const schemas = {
  hotel: hotelSchema,
  hotels: hotelSchema.array(),
};
