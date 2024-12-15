// src/App.js

import React, { useState } from 'react';
import Editor from './components/Editor';
import './index.css'; // Ensure Tailwind CSS is included

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} min-h-screen`}>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Tailwind CSS Editor</h1>
        <Editor />
      </div>
    </div>
  );
}

export default App;
