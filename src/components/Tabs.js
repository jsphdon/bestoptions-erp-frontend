// src/Tabs.js
import React from 'react';

const Tabs = ({ activeTab, onTabClick, tabs }) => {
  return (
    <div className="flex space-x-8 text-wrap">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={index === activeTab ? "text-blue-700 font-bold text-md py-4 border-blue-700  border-b-2" : "text-gray-400 font-bold text-md py-4 "}
          onClick={() => onTabClick(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
