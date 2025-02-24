'use client';

import React, { useState, useEffect } from 'react';

const TodoApp: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    // Disable scrolling for the whole page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling on unmount
    };
  }, []);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] text-white">
      <h1 className="text-3xl font-bold mb-6">✅ Todo App</h1>

      {/* Input Field */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none shadow-md w-64"
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button
          onClick={addTask}
          className="px-5 py-2 bg-white text-blue-600 rounded-lg font-medium transition-all duration-300 shadow-md hover:bg-gray-200"
        >
          Add
        </button>
      </div>

      {/* Scrollable Task List */}
      <div className="w-full max-w-md max-h-[400px] overflow-y-auto bg-white p-4 rounded-lg shadow-lg text-gray-900">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
              >
                <span>{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
