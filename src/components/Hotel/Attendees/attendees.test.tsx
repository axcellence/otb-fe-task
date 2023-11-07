import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Attendees } from "./index";

describe("Attendees Component", () => {
  test("renders correctly with all attendee types", () => {
    const attendees = { adults: 1, children: 2, infants: 1 };
    render(<Attendees attendees={attendees} />);

    expect(screen.getByTestId("attendees").textContent).toBe(
      "1 adult, 2 children & 1 infant"
    );
  });

  test("renders correctly without children and infants", () => {
    const attendees = { adults: 1, children: 0, infants: 0 };
    render(<Attendees attendees={attendees} />);

    expect(screen.getByTestId("attendees").textContent).toBe("1 adult");
    expect(screen.getByTestId("attendees").textContent).not.toContain("child");
    expect(screen.getByTestId("attendees").textContent).not.toContain("infant");
  });

  test("renders correctly without adults and children", () => {
    const attendees = { adults: 0, children: 0, infants: 1 };
    render(<Attendees attendees={attendees} />);

    expect(screen.getByTestId("attendees").textContent).toBe("1 infant");
    expect(screen.getByTestId("attendees").textContent).not.toContain("adult");
    expect(screen.getByTestId("attendees").textContent).not.toContain("child");
  });

  test('renders "No attendees" when all counts are zero', () => {
    const attendees = { adults: 0, children: 0, infants: 0 };
    render(<Attendees attendees={attendees} />);

    expect(screen.getByTestId("attendees").textContent).toBe("");
  });

  test('correctly pluralizes with multiple adults, children, and infants', () => {
    const attendees = { adults: 2, children: 3, infants: 4 };
    render(<Attendees attendees={attendees} />);

    expect(screen.getByTestId("attendees").textContent).toBe(
      "2 adults, 3 children & 4 infants"
    );
  });
});
