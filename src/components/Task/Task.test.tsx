import { fireEvent, render, screen } from "@testing-library/react";
import Task from "./Task";
import { ITask } from "../../global/interfaces";

describe("Task component", () => {
  const task: ITask = {
    id: 0,
    name: "Task Test",
    done: true,
  };
  const dispatch = jest.fn();
  const taskArgs = {
    task: task,
    dispatch: dispatch,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Renders task name and id", () => {
    render(<Task {...taskArgs} />);
    const taskText = screen.getByText(`${task.name} - ${task.id}`);
    expect(taskText).toBeInTheDocument();
  });

  test("Renders checkmark button if task is done", () => {
    render(
      <Task task={{ ...task, done: true }} dispatch={dispatch} />
    );
    const checkButton = screen.getByRole("button", { name: "done" });
    expect(checkButton).toBeInTheDocument();
  });

  test("Renders cross button if task is not done", () => {
    render(
      <Task { ...taskArgs} />
    );
    const removeButton = screen.getByTestId("remove-task-button");
    expect(removeButton).toBeInTheDocument();
  });

  test("Calls dispatch with correct action when checkmark button is clicked", () => {
    render(<Task {...taskArgs} />);
    const changeButton = screen.getByTestId("change-task-button");
    fireEvent.click(changeButton);
    expect(dispatch).toHaveBeenCalledWith({
      type: "change_task",
      //taskId: task.id,
    });
  });

  test("Calls dispatch with correct action when cross button is clicked", () => {
    render(<Task {...taskArgs} />);
    const removeTaskButton = screen.getByTestId("remove-task-button");
    fireEvent.click(removeTaskButton);
    expect(dispatch).toHaveBeenCalledWith({
      type: "remove_task",
      taskId: task.id,
    });
  });
});
