import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders footer text", () => {
    render(<Footer />);
    expect(screen.getByText("Made with ❤️")).toBeInTheDocument();
  });
});
