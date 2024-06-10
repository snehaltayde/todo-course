'use client';
import { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Mediastic TODO</h1>
        <div className="text-center mb-6">
          <div className="text-xl">Todo Done</div>
          <div className="text-3xl font-bold text-orange-500">
            {completedTasksCount}/{tasks.length}
          </div>
          <div>keep it up</div>
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white"
            placeholder="write your next task"
          />
          <button
            onClick={handleAddTask}
            className="bg-orange-500 p-2 rounded-r-lg"
          >
            +
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between mb-2 p-2 bg-gray-700 rounded-lg"
            >
              <div className="flex items-center">
                <button
                  onClick={() => handleToggleTask(task.id)}
                  className={`w-4 h-4 rounded-full mr-2 ${
                    task.completed ? 'bg-green-500' : 'border border-gray-400'
                  }`}
                ></button>
                <span className={`${task.completed ? 'line-through' : ''}`}>
                  {task.text}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleToggleTask(task.id)}
                  className="text-gray-400 hover:text-white mr-2"
                >
                  ✎
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-gray-400 hover:text-white"
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
