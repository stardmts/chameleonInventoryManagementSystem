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
        case 'add Stock':
        return <AddStock />;
        default:
        return <AddStock />;
        }
    };

  return (
    <main className = "flex flex-col lg:flex-row bg-[#262626] w-full">     
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
    </main>
  );
}