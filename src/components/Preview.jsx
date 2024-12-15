// src/components/Preview.js

import React from 'react';

const Preview = ({ classes }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <div className={classes}>
        <p className="text-lg font-bold">Preview Area</p>
      </div>
    </div>
  );
};

export default Preview;
