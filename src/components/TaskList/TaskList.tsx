import React, { useState, useReducer, useRef } from "react";
import { ITask } from "../../global/interfaces";
import { tasksReducer } from "../../global/reducers";
import { Task } from "../../components";

function TaskList(): JSX.Element {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [idx, setIdx] = useState(0);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: "add_task",
      taskId: idx,
      taskName: taskInput.current?.value || "",
    });
    setIdx(idx + 1);
  };

  return (
    <>
      <div
        className='tasklist dark:bg-slate-600 rounded-lg shadow-md
            shadow-emerald-400 md:w-[50%] m-auto mt-8 p-4'>
        <form className='flex flex-row items-stretch mb-12'>
          <input
            className='rounded h-12 p-2 w-full mr-2'
            name='task-input'
            placeholder='Type your name'
            data-testid='task-input'
            type='text'
            autoFocus
            ref={taskInput}
          />
          <button
            className='bg-emerald-400 text-white p-2 rounded-md cursor-pointer hover:scale-110 duration-300'
            data-testid='save-task-button'
            onClick={handleSaveClick}>
            Save
          </button>
        </form>
        {tasks.map((task: ITask, index: number) => (
          <Task task={task} dispatch={dispatch} key={index} />
        ))}
      </div>
    </>
  );
}
export default TaskList;
