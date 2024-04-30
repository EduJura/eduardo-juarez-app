import { fireEvent, render, screen } from "@testing-library/react";
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
    render(<TaskList />);
    // Ensure input field and save button are rendered
    const taskInput = screen.getByTestId("task-input");
    const saveTaskButton = screen.getByTestId("save-task-button");
    expect(taskInput).toBeInTheDocument();
    expect(saveTaskButton).toBeInTheDocument();    
  });

  test("Calls dispatch with correct action when save button is clicked", () => {
    render(<TaskList />);
    // Simulate typing in input field and clicking save button
    const taskInput = screen.getByTestId("task-input") as HTMLInputElement;
    const saveTaskButton = screen.getByTestId("save-task-button");
    fireEvent.change(taskInput, { target: { value: `${task.name}` } });
    fireEvent.click(saveTaskButton);
    // Ensure the task is added to the list
    const taskText = screen.getByText(`${task.name} - ${task.id}`);
    expect(taskText).toBeInTheDocument();
  });
});
