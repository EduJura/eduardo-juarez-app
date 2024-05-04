import { render, screen } from "@testing-library/react";
import FeedbackMessage from "./FeedbackMessage";

describe("FeedbackMessage Component", () => {
  test("Renders FeedbackMessage text", () => {
    render(<FeedbackMessage />);
    const feedbackMessageText = screen.getByText(
      /No projects to be shown, please try again!/i
    );
    expect(feedbackMessageText).toBeInTheDocument();
  });
});
