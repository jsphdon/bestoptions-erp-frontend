// src/TabContent.js
import React from 'react';

const TabContent = ({ content }) => {
  return (
    <div className="overflow-auto">
      {content}
    </div>
  );
};

export default TabContent;