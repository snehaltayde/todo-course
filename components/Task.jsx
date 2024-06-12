import React from 'react';
import DeleteTask from './DeleteTask';
import EditTask from './ui/EditTask';
const Task = ({
  task,
  handleToggleTask,
  handleDeleteTask,
  handleEditTask,
  allusers,
  userId,
}) => {
  return (
    <>
      <li
        key={task._id}
        className="flex items-center justify-between mb-2 p-2 bg-gray-700 rounded-lg"
      >
        <div className="flex items-center p-2">
          <button
            onClick={() => handleToggleTask(task._id)}
            className={`w-4 h-4 rounded-full mr-2 ${
              task.completed ? 'bg-green-500' : 'border border-gray-400'
            }`}
          ></button>
          <span className={`${task.completed ? 'line-through' : ''} `}>
            {task.text}
          </span>
        </div>
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-white mr-2">
            <span className="flex text-xs">
              Assigned to: {task.assigned_to?.firstname}
            </span>
            <span className="flex text-xs">
              Assigned by: {task.creator?.firstname}
            </span>
          </button>
          {userId == task.creator._id ? (
            <EditTask
              handleEditTask={handleEditTask}
              task={task}
              allusers={allusers}
            ></EditTask>
          ) : null}

          {userId == task.creator._id ? (
            <DeleteTask
              handleDeleteTask={handleDeleteTask}
              task={task}
            ></DeleteTask>
          ) : null}
        </div>
      </li>
    </>
  );
};

export default Task;
