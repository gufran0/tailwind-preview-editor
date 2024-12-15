// src/components/CodeGenerator.js

import React from 'react';

const CodeGenerator = ({ classes }) => {
  const generateCode = () => {
    return `<div class="${classes}">Your Content Here</div>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    alert('Code copied to clipboard!');
  };

  return (
    <div className="mt-4">
      <pre className="bg-gray-200 p-2 rounded">
        {generateCode()}
      </pre>
      <button
        onClick={copyToClipboard}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Copy Code
      </button>
    </div>
  );
};

export default CodeGenerator;
