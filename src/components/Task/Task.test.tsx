import React from "react";
import { fireEvent, render } from "@testing-library/react";
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

  test("renders task name and id", () => {
    const { getByText } = render(<Task {...taskArgs} />);
    expect(getByText(`${task.name} - ${task.id}`)).toBeInTheDocument();
  });

  test("renders checkmark button if task is done", () => {
    const { getByRole } = render(
      <Task task={{ ...task, done: true }} dispatch={dispatch} />
    );
    expect(getByRole("button", { name: "✓" })).toBeInTheDocument();
  });

  test("renders cross button if task is not done", () => {
    const { getByRole } = render(
      <Task { ...taskArgs} />
    );
    expect(getByRole("button", { name: "𝘟" })).toBeInTheDocument();
  });

  test("calls dispatch with correct action when checkmark button is clicked", () => {
    const { getByTestId } = render(<Task {...taskArgs} />);
    const btn = getByTestId("change-task-button");
    fireEvent.click(btn);
    expect(dispatch).toHaveBeenCalledWith({
      type: "change_task",
      taskId: task.id,
    });
  });

  test("calls dispatch with correct action when cross button is clicked", () => {
    const { getByTestId } = render(<Task {...taskArgs} />);
    const btn = getByTestId("remove-task-button");
    fireEvent.click(btn);
    expect(dispatch).toHaveBeenCalledWith({
      type: "remove_task",
      taskId: task.id,
    });
  });
});
