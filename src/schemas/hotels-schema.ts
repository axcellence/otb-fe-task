import { z } from "zod";

const attendeesSchema = z.object({
  adults: z.number(),
  children: z.number(),
  infants: z.number(),
});

const dateSchema = z.object({
  start: z.string(),
  end: z.string(),
});

const airportSchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const hotelSchema = z.object({
  image: z.string(),
  title: z.string(),
  overview: z.string(),
  location: z.string(),
  starRating: z.number(),
  dates: dateSchema,
  departingAirport: airportSchema,
  price: z.number(),
  attendees: attendeesSchema,
});