"use client";

import { useState } from 'react';
import AddStock from "./addStock";

export default function Admin() {
  return (
    <main className = "flex flex-row justify-around bg-[#262626] sapce-y-10 w-full p-10">
      
    <AddStock />

    </main>
  );
}
