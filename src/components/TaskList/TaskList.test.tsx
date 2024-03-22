import { fireEvent, render } from "@testing-library/react";
import { ITask } from "../../global/interfaces";
import TaskList from "./TaskList";

describe("TaskList component", () => {
  const task: ITask = {
    id: 0,
    name: "Task 1",
    done: false,
  };

  // Mock tasksReducer
  jest.mock("../../global/reducers");

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Renders TaskList component correctly", () => {
    const { getByTestId } = render(<TaskList />);

    // Ensure input field and save button are rendered
    expect(getByTestId("task-input")).toBeInTheDocument();
    expect(getByTestId("save-task-button")).toBeInTheDocument();    
  });

  test("Calls dispatch with correct action when save button is clicked", () => {
    const { getByTestId, getByText } = render(<TaskList />);
    // Simulate typing in input field and clicking save button
    const taskInput = getByTestId("task-input") as HTMLInputElement;

    fireEvent.change(taskInput, { target: { value: `${task.name}` } });
    fireEvent.click(getByTestId("save-task-button"));

    // Ensure the task is added to the list
    expect(getByText(`${task.name} - ${task.id}`)).toBeInTheDocument();
  });
});
