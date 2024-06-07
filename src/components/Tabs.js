// src/Tabs.js
import React from 'react';

const Tabs = ({ activeTab, onTabClick, tabs }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${tab.className} ${index === activeTab ? "border-b-4 border-solid border-b-blue-500" : ""}`}
          onClick={() => onTabClick(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
