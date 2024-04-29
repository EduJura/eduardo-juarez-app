import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("Renders footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/Made with ❤️/i);
    expect(footerText).toBeInTheDocument();
  });
});
