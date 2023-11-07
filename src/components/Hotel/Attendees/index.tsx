import { z } from "zod";
import { schemas } from "@schemas/index";
import { pluralise } from "@utils/helpers";

type AttendeeProps = {
  attendees: z.infer<typeof schemas.hotel>["attendees"];
};

function formatAttendeeCount(
  count: number,
  singular: string,
  plural: string
): JSX.Element | null {
  return count > 0 ? (
    <>
      <strong>{count}</strong> {pluralise(count, singular, plural)}
    </>
  ) : null;
}

export function Attendees({ attendees }: AttendeeProps) {
  const { adults, children, infants } = attendees;

  const formattedAdults = formatAttendeeCount(adults, "adult", "adults");
  const formattedChildren = formatAttendeeCount(children, "child", "children");
  const formattedInfants = formatAttendeeCount(infants, "infant", "infants");

  return (
    <p data-testid="attendees">
      {formattedAdults}
      {formattedChildren && formattedAdults ? ", " : null}
      {formattedChildren}
      {formattedInfants && (formattedAdults || formattedChildren)
        ? " & "
        : null}
      {formattedInfants}
    </p>
  );
}
