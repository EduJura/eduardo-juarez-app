import { ITask } from "../interfaces";

export function tasksReducer(tasks: ITask[], action: { type: any; taskId: any; taskName: any; }) { 
  switch (action.type) {
    case 'add_task':
      return [
        ...tasks,
        {
          id: action.taskId,
          name: action.taskName,
          done: false
        }
      ];
    case 'change_task':
      const updatedTaskIdx: number = tasks.findIndex(task => task.id === action.taskId);
      if (updatedTaskIdx > -1) {
        const updatedTasks = [...tasks];
        const updatedTask = {
          ...updatedTasks[updatedTaskIdx],
          done: !updatedTasks[updatedTaskIdx].done
        };        
        updatedTasks.splice(updatedTaskIdx, 1, updatedTask);        
        return updatedTasks;
      }
      return tasks;
    case 'remove_task':
      return [...tasks.filter(task => task.id !== action.taskId)];
  
    default:
      break;
  }
}