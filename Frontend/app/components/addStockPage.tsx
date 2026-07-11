"use client";

import { useState } from 'react';
import StockPage from './stockPage';
import AddStock from './addStock';
import { useRouter } from "next/navigation";
import UsersPage from './usersPage';
import TransactionPage from './transactionPage';
import UserSettings from './userSettings';
import QrScanner from './qrScanner';

export default function AddStockPage() {

    const [open, setOpen] = useState(false);
  
    const [display, setDisplay ] = useState('');
  
    const router = useRouter();
  
    const renderContent = () => {
      switch (display) {
        case 'QR code scanner':
        return <QrScanner />;
        case 'Transaction Log':
        return <TransactionPage />;
        case 'Stock':
        return <StockPage />;
        case 'Users':
        return <UsersPage />;
        case 'Account':
        return <UserSettings />;
        default:
        return <AddStock />;
        }
    };

  return (
    <main className = "flex flex-row bg-[#262626] w-full">
      <div className = "hidden lg:block flex flex-col justify-between bg-[#111111] w-45 border-r-2 border-white">
        <div className = "flex flex-col">
          <button onClick = {() => router.push('/staffLandingPage')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> DashBoard </button>
          <button onClick = {() => setDisplay('QR code scanner')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> QR code scanner </button>
          <button onClick = {() => setDisplay('Transaction Log')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Transaction Log </button>
          <button onClick = {() => setDisplay('Stock')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Stock </button>
          <button onClick = {() => setDisplay('Users')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Users </button>
        </div>
        <button onClick={() => setDisplay('Account')} className="group flex h-10 w-10 items-center justify-bottom rounded-md transition-colors hover:bg-[#bfbfbf]/20">
          <svg 
            className="h-8 w-8 text-white transition-colors group-hover:text-[#bfbfbf]" 
            xmlns="http://w3.org" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <circle cx="12" cy="7" r="4" />          
            <path d="M5.5 21a8.5 8.5 0 0 1 11-7.5" />
            <circle cx="19" cy="19" r="2" />
            <path d="M19 16v1m0 4v1m-3-3h1m4 0h1" />
          </svg>
        </button>
      </div>
      <div className = "flex flex-col items-center min-h-screen w-full lg:flex-row lg:justify-around">
        <div className = "lg:hidden bg-[#484848] w-full flex flex-row justify-between px-3 py-4 border-b-2 border-white">
          <button onClick = {() => setDisplay('QR code scanner')} className = "text-white py-1 px-2 rounded-full border-2 border-white shadow-2xl"> Scanner </button>
          <button onClick = {() => setOpen(!open)} className = "text-white"> 
            { !open && (
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                /> 
              </svg> 
              )
            }
          </button>
          {open && (
            <div className = "absolute right-3 flex flex-row space-x-2 bg-[#323232] p-4 rounded-xl w-auto border-2 border-white z-50">
              <button onClick = {() => setOpen(!open)} className = "absolute left-1 top-1 text-white z-25"> 
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className = "flex flex-col">
                <button onClick = {() => {router.push('/staffLandingPage'); setOpen(!open)}} className = "text-white p-1"> DashBoard </button>
                <button onClick = {() => {setDisplay('QR code scanner'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> QR Scanner </button>
                <button onClick = {() => {setDisplay('Transaction Log'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> Transaction Log</button>
                <button onClick = {() => {setDisplay('Stock'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> Stock </button>
                <button onClick = {() => {router.push('/addStock'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> Add stock </button>
                <button onClick = {() => {setDisplay('Users'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> Users </button>
                <button onClick = {() => {setDisplay('Account'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> Settings </button>
              </div>
            </div>
          )}
          
        </div>
        {renderContent()}
      </div>
    </main>
  );
}