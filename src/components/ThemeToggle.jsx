// src/components/ThemeToggle.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../features/editorSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      className="mt-2 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
      onClick={handleToggle}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
