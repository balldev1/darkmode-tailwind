'use client';
import React, { useState } from 'react';

export default function Home() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

  return (
      <div className={darkMode ? "dark" : ""}>
          <div className="h-screen w-full bg-rose-800 dark:bg-gray-900 flex flex-col items-center justify-center">
              <button
                  className="mb-4 px-4 py-2 bg-rose-500 dark:bg-gray-700 text-white rounded"
                  onClick={toggleDarkMode}
              >
                  Toggle Dark Mode
              </button>
              <div className="w-[20rem] bg-black dark:bg-gray-800 p-4 rounded">
                  <div className="bg-white dark:bg-green-600 dark:text-green-500 p-2 rounded">
                      <span className='dark:text-rose-500'>asdasd</span>
                  </div>
              </div>
              <div className="mt-4 text-white dark:text-gray-400">
                  2
              </div>
          </div>
      </div>
  );
}
