import Header from "./Header";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  test("Renders header text", () => {
    render(<Header />, {wrapper: BrowserRouter});
    
    const headerText = screen.getByText(/Resume/i);
    expect(headerText).toBeInTheDocument();
  });
});
