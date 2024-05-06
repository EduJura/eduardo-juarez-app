import { FaTrashAlt } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import "./Task.scss";

function Task({ task, dispatch }): JSX.Element {
  return (
    <div className='task text-2xl flex flex-row justify-between my-4'>
      <div className={`text-white ${task.done ? "task--done" : ""}`}>
        {task.name} - {task.id}
      </div>
      <div className=''>
        <button
          className='btn btn-primary ml-3 mr-2'
          data-testid='change-task-button'
          onClick={(e) => {
            dispatch({
              type: "change_task",
              taskId: task.id,
            });
          }}>
          {task.done ? (
            <ImCheckboxChecked className='text-green-300 hover:scale-110 duration-300' />
          ) : (
            <ImCheckboxUnchecked className='text-red-300 hover:scale-110 duration-300' />
          )}
        </button>
        <button
          className='btn btn-warning'
          data-testid='remove-task-button'
          onClick={() => {
            dispatch({
              type: "remove_task",
              taskId: task.id,
            });
          }}>
          <FaTrashAlt className='text-slate-300 hover:scale-110 duration-300' />
        </button>
      </div>
    </div>
  );
}

export default Task;
