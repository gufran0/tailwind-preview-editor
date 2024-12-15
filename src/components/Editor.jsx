// src/components/Editor.js

import React, { useState } from 'react';
import Preview from './Preview';  
import CodeGenerator from './CodeGenerator'; 

const Editor = () => {
  const [tailwindClasses, setTailwindClasses] = useState('');

  const handleInputChange = (e) => {
    setTailwindClasses(e.target.value);
  };

  return (
    <div>
      <label htmlFor="tailwind-input" className="block text-gray-700">Tailwind Classes:</label>
      <input
        id="tailwind-input"
        type="text"
        value={tailwindClasses}
        onChange={handleInputChange}
        className="mt-1 p-2 border rounded w-full"
        placeholder="Enter Tailwind classes..."
      />
      <Preview classes={tailwindClasses} />
      <CodeGenerator classes={tailwindClasses} />
    </div>
  );
};

export default Editor;
