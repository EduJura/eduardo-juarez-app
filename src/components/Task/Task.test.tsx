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

  test("Renders task name and id", () => {
    const { getByText } = render(<Task {...taskArgs} />);
    expect(getByText(`${task.name} - ${task.id}`)).toBeInTheDocument();
  });

  test("Renders checkmark button if task is done", () => {
    const { getByRole } = render(
      <Task task={{ ...task, done: true }} dispatch={dispatch} />
    );
    expect(getByRole("button", { name: "✓" })).toBeInTheDocument();
  });

  test("Renders cross button if task is not done", () => {
    const { getByTestId } = render(
      <Task { ...taskArgs} />
    );
    expect(getByTestId("remove-task-button")).toBeInTheDocument();
  });

  test("Calls dispatch with correct action when checkmark button is clicked", () => {
    const { getByTestId } = render(<Task {...taskArgs} />);
    const btn = getByTestId("change-task-button");
    fireEvent.click(btn);
    expect(dispatch).toHaveBeenCalledWith({
      type: "change_task",
      taskId: task.id,
    });
  });

  test("Calls dispatch with correct action when cross button is clicked", () => {
    const { getByTestId } = render(<Task {...taskArgs} />);
    const btn = getByTestId("remove-task-button");
    fireEvent.click(btn);
    expect(dispatch).toHaveBeenCalledWith({
      type: "remove_task",
      taskId: task.id,
    });
  });
});
