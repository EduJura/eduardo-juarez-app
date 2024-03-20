import React, { useState, useReducer, useRef } from "react";
import { ITask } from "./global/interfaces";
import { tasksReducer } from "./global/reducers";
import Task from "./components/Task";

function App(): JSX.Element {
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card mt-4'>
              <div className='card-body'>
                <form>
                  <input
                    className='form-control'
                    type='text'
                    autoFocus
                    ref={taskInput}
                  />
                  <button
                    className='btn btn-success btn-block mt-3'
                    onClick={handleSaveClick}>
                    Save
                  </button>
                </form>
              </div>
            </div>
            {tasks.map((task: ITask, index: number) => (
              <Task task={task} dispatch={dispatch} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
