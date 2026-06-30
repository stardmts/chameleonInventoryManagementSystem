"use client";

import { useState } from 'react';
import StaffHomePage from './staffHomePage';

export default function LandingPage() {

  const [display, setDisplay ] = useState('');

  const renderContent = () => {
    switch (display) {
        case 'QR code scanner':
        return ;
        case 'Transaction Log':
        return ;
        case 'Stock':
        return ;
        case 'Users':
        return ;
        case 'Account':
        return ;
        default:
        return <StaffHomePage />;
        }
    };

  return (

    <main className = "flex flex-row bg-[#262626] w-full">

      <div className = "flex flex-col justify-between bg-[#111111] h-auto w-45 border-r-2 border-white">

        <div className = "flex flex-col">

          <button onClick = {() => setDisplay('QR code scanner')} className = "w-44 h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> QR code scanner </button>
          <button onClick = {() => setDisplay('')} className = "w-44 h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Transaction Log </button>
          <button onClick = {() => setDisplay('QR code scanner')} className = "w-44 h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Stock </button>
          <button onClick = {() => setDisplay('QR code scanner')} className = "w-44 h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Users </button>

        </div>

        <button onClick={() => setDisplay('QR code scanner')} className="group flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-[#bfbfbf]/20">
          <svg 
            className="h-8 w-8 text-white transition-colors group-hover:text-[#bfbfbf]" 
            xmlns="http://w3.org" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="7" r="4" />
          
            <path d="M5.5 21a8.5 8.5 0 0 1 11-7.5" />

            <circle cx="19" cy="19" r="2" />
            <path d="M19 16v1m0 4v1m-3-3h1m4 0h1" />
          </svg>
        </button>

      </div>

      {renderContent()}

    </main>
    
  );
}

{/* <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = "Search the catalogue..." className = "text-white text-left bg-[#323232] w-100 px-2 py-1 rounded-full border-b-2 border-white"/> */}