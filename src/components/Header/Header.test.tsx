import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  test("Renders footer text", () => {
    render(<Header />);
    const headerText = screen.getByText(/JE/i);
    expect(headerText).toBeInTheDocument();
  });
});
