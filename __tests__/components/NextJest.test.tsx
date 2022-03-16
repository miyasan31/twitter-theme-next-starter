import { render } from "@testing-library/react";

import { NextJestText } from "~/components/NextJest";

describe("🥳 NextJestText Component Text!!!", () => {
  it("Jest text", () => {
    const { getByText } = render(<NextJestText />);

    expect(getByText("Next.js Jest Init")).toBeTruthy();
  });
});
