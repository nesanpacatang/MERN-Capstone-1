import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="py-40">
      <nav
        className={`flex items-center justify-between p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <div className="font-bold text-xl">Logo</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center">
          <label
            htmlFor="darkModeToggle"
            className="flex items-center cursor-pointer"
          >
            <span className="mr-2">Dark Mode</span>
            {darkMode ? (
              <FiMoon className="w-5 h-5 text-indigo-600" />
            ) : (
              <FiSun className="w-5 h-5 text-indigo-600" />
            )}
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="hidden"
            />
          </label>
        </div>
      </nav>
    </div>
  );
};


