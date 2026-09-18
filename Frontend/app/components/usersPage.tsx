"use client";

import { useRouter } from "next/navigation";
import AddUser from "./addUser";
import UserCard from "./cards/userCard";
import { useState, useEffect } from "react";
import QrScanner from "./qrScanner";
import TransactionPage from "./transactionPage";
import UserSettings from "./userSettings";

interface User {
    userId: string;
    userEmail: string;
    firstName: string;
    secondName: string;
    userRole: string;
}

export default function UsersPage() {

    const [open, setOpen] = useState(false);
    
    const [display, setDisplay ] = useState('');
    
    const router = useRouter();

    const [users, setUsers] = useState<User[]>([])

    const loadUsers = async () => {
        try {
            fetch('http://localhost:8080/api/Users')
            .then((data) => data.json())
            .then((data) => setUsers(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };

    const search = async (search) => {
        try {
            
            if (search == "") {
                setUsers([]);
                loadUsers();
                return;
            }

            const response = await fetch(`http://localhost:8080/api/Users/Search/${search}`)

            if(!response.ok) {
                throw new Error('Http error' + response.status)
            }

            const data = await response.json();
            setUsers(data);
            
        } catch (err) {
            console.error("Search error", err)
        }
    };

    useEffect(() => {
        loadUsers();
    }, [])
    
    const renderContent = () => {
        switch (display) {
            case 'QR code scanner':
                return <QrScanner />;
            case 'Transaction Log':
                return <TransactionPage />;
            case 'Account':
                return <UserSettings />;
            case "addUser":
                return <AddUser />; 
            default:
            return (
                <main className = "flex flex-col min-h-screen w-full items-center space-y-5 bg-[#323232]">
                    <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
                        All users:
                    </header>
                    <div className = "flex flex-col space-y-2 lg:flex-row items-center justify-between w-full px-2 lg:px-10">
                    <div className = "flex flex-row space-x-5 w-full">  
                        <input type = "text" onChange = {(e) => search(e.target.value)} placeholder = "Search the costume catalogue..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
                        <button onClick = {() => {setUsers([]), loadUsers()}} className = "text-white bg-[#484848] border-2 border-white rounded-full p-1" > Clear Search </button>
                    </div>   
                        <div className = "flex flex-row space-x-2 px-2">
                            <button  className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Admin </button> {/*add user page*/}
                            <button  className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#FF1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> All users </button> {/*remove user page*/}
                            <button onClick = {() => setDisplay('addUser')} className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Add user </button> {/*remove user page*/}
                        </div>
                    </div>
                    <div className = "flex flex-col items-center space-y-2 overflow-y-auto bg-[#323232] w-full text-white rounded px-2 lg:p-5">
                        {users.map((user) => <UserCard key = {user.userId} userId = {user.userId} userEmail = {user.userEmail} firstName = {user.firstName} secondName = {user.secondName} userRole = {user.userRole}/>)}
                    </div>
                </main>   
            );
        }
    };

    return (
        <main className = "flex flex-row bg-[#262626] w-full">
          <div className = "hidden lg:block flex flex-col justify-between bg-[#111111] w-45 border-r-2 border-white">
            <div className = "flex flex-col">
              <button onClick = {() => router.push('/homePage')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> DashBoard </button>
              <button onClick = {() => setDisplay('QR code scanner')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> QR code scanner </button>
              <button onClick = {() => router.push('/orders')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Orders </button>
              <button onClick = {() => setDisplay('Transaction Log')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Transaction Log </button>
              <button onClick = {() => router.push('/addStock')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Add stock </button>
              <button onClick = {() => window.location.reload()} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Users </button>
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
                {!open && (
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
                    <button onClick = {() => {router.push('/homePage')}} className = "text-white p-1"> DashBoard </button>
                    <button onClick = {() => {setDisplay('QR code scanner'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> QR Scanner </button>
                    <button onClick = {() => {router.push('orders')}} className = "text-white p-1 border-t-2 border-[#484848]"> Orders </button>
                    <button onClick = {() => {setDisplay('Transaction Log'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> Transaction Log</button>
                    <button onClick = {() => {router.push('/addStock')}} className = "text-white p-1 border-t-2 border-[#484848]"> Add stock </button>
                    <button onClick = {() => window.location.reload()} className = "text-white p-1 border-t-2 border-[#484848]"> Users </button>
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