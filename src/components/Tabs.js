// src/Tabs.js
import React from 'react';

const Tabs = ({ activeTab, onTabClick, tabs }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      {tabs.map((tab) => (
        <button
          key={row.id}
          className={`${tab.className} ${row.id === activeTab ? "border-b-4 border-solid border-b-blue-500" : ""}`}
          onClick={() => onTabClick(row.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
