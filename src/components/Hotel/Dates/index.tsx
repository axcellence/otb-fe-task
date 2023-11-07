import { z } from "zod";
import { schemas } from "@schemas/index";
import { getDateRange } from "@utils/helpers";

type DateProps = {
  dates: z.infer<typeof schemas.hotel>["dates"];
};

export function Dates({ dates }: DateProps) {
  const startDate = new Date(dates.start);
  const endDate = new Date(dates.end);

  const duration = getDateRange(startDate, endDate);

  const date = startDate.toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <strong>{date}</strong> for <strong>{duration} </strong>
    </div>
  );
}
