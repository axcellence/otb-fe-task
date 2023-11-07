import { z } from "zod";
import { describe, expect, test } from "vitest";
import { schemas } from "@schemas/index";
import {
  pluralise,
  formatPrice,
  wait,
  sortData,
  getDateRange,
} from "./helpers";

describe("helpers", () => {
  test("pluralise", () => {
    expect(pluralise(1, "hotel", "hotels")).toBe("hotel");
    expect(pluralise(0, "hotel", "hotels")).toBe("hotels");
    expect(pluralise(2, "hotel", "hotels")).toBe("hotels");
  });

  test("formatPrice", () => {
    expect(formatPrice(100)).toBe("£100.00");
    expect(formatPrice(100, "USD")).toBe("$100.00");
  });

  test("wait", async () => {
    const start = Date.now();
    await wait(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThan(99);
  });

  test("sortData", () => {
    const data = [
      {
        title: "Hotel A",
        price: 300,
        starRating: 5,
      },
      {
        title: "Hotel B",
        price: 200,
        starRating: 4,
      },
      {
        title: "Hotel C",
        price: 100,
        starRating: 3,
      },
    ] as z.infer<typeof schemas.hotels>;

    expect(sortData(data, "price")).toEqual([
      {
        title: "Hotel C",
        price: 100,
        starRating: 3,
      },
      {
        title: "Hotel B",
        price: 200,
        starRating: 4,
      },
      {
        title: "Hotel A",
        price: 300,
        starRating: 5,
      },
    ]);

    expect(sortData(data, "rating")).toEqual([
      {
        title: "Hotel A",
        price: 300,
        starRating: 5,
      },
      {
        title: "Hotel B",
        price: 200,
        starRating: 4,
      },
      {
        title: "Hotel C",
        price: 100,
        starRating: 3,
      },
    ]);

    expect(sortData(data, "alphabetical")).toEqual([
      {
        title: "Hotel A",
        price: 300,
        starRating: 5,
      },
      {
        title: "Hotel B",
        price: 200,
        starRating: 4,
      },
      {
        title: "Hotel C",
        price: 100,
        starRating: 3,
      },
    ]);
  });

  test("get date range", () => {
    expect(getDateRange(new Date("2021-01-07"), new Date("2021-01-14"))).toBe(
      "7 days"
    );
    expect(getDateRange(new Date("2021-01-01"), new Date("2021-01-08"))).toBe(
      "7 days"
    );
    // expect(() =>
    //   getDateRange(new Date("2021-02-01"), new Date("2021-01-08"))
    // ).toThrowError("Start date cannot be after end date");
  });
});
