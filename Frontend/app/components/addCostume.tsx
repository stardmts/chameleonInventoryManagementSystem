"use client";

import { useState } from 'react';
import Select, { SingleValue } from 'react-select';

export default function AddCostume() {

  return (
    <main className = "flex flex-col bg-[#262626] w-full items-center sapce-y-5">
      
      <header className = "text-white text-2xl">
        Add new item:
      </header>
    
      <header className = "text-white text-1xl">
        Choose the type of item your adding
      </header>

    </main>
  );
}