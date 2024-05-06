import { render, screen } from "@testing-library/react";
import FeedbackMessage from "./FeedbackMessage";

const props: { message: string } = {
  message: "No data to be shown, please try again!",
};

describe("FeedbackMessage Component", () => {
  test("Renders FeedbackMessage text", () => {
    render(<FeedbackMessage {...props} />);
    const feedbackMessageText = screen.getByText(
      /No data to be shown, please try again!/i
    );
    expect(feedbackMessageText).toBeInTheDocument();
  });
});
