import "./Task.scss";

function Task({ task, dispatch }): JSX.Element {
  return (
    <div className='card card-body mt-2'>
      <div className='row'>
        <div className='col-md-9'>
          <h2 className={task.done ? "task--done" : ""}>
            {task.name} - {task.id}
          </h2>
        </div>
        <div className='col-md-3'>
          <button
            className='btn btn-primary ml-3 mr-1'
            data-testid='change-task-button'
            onClick={(e) => {
              dispatch({
                type: "change_task",
                taskId: task.id,
              });
            }}>
            {task.done ? "✓" : "𝘟"}
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
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
