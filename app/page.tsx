'use client';
import React, { useState } from 'react';

export default function Home() {

  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
      <div className="h-screen w-full bg-rose-800 flex">
          <button className="bg-rose-500 absolute" onClick={toggleDivVisibility}>
              open
          </button>
          {isDivVisible &&
          <div className="w-[20rem] bg-black">
             1
          </div>
          }
          <div>
              2
          </div>
      </div>
  );
}
