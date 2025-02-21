'use client';

import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Page: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">✨ My To-Do List ✨</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}  // 👈 Listen for Enter key
            placeholder="What do you need to do?"
            className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            onClick={addTask} 
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition duration-300"
          >
            <FaPlus />
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <span className="text-gray-800">{task}</span>
              <button 
                onClick={() => removeTask(index)} 
                className="text-red-500 hover:text-red-600 transition duration-300"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && (
          <p className="text-gray-400 text-center mt-4">No tasks added yet 🎉</p>
        )}
      </div>
    </div>
  );
};

export default Page;
