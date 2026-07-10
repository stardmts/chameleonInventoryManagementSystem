"use client";

import AddUser from "./addUser";
import UserCard from "./cards/usersCard";
import { useState } from "react";

export default function UsersPage() {

    const [search, setSearch] = useState('');

    const [display, setDisplay] = useState('');
    
    const renderContent = () => {
        switch (display) {
            case "addUser":
                return <AddUser />; 
            default:
            return (
                <main className = "flex flex-col min-h-screen w-full items-center space-y-5 bg-[#323232]">
                    <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
                        All users:
                    </header>
                    <div className = "flex flex-col space-y-2 lg:flex-row items-center justify-between w-full px-2 lg:px-10">
                        <div>  
                            <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = "Search users..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
                        </div>  
                        <div className = "flex flex-row space-x-2 px-2">
                            <button  className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Admin </button> {/*add user page*/}
                            <button  className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#FF1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> All users </button> {/*remove user page*/}
                            <button onClick = {() => setDisplay('addUser')} className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Add user </button> {/*remove user page*/}
                        </div>
                    </div>
                    <div className = "flex flex-col items-center space-y-2 overflow-y-auto bg-[#323232] lg:h-190 w-full lg:w-431 text-white rounded px-2 lg:p-5">
                        <UserCard key = "1" userId = "0001" userEmail = "elliothardywork@gmail.com" userFName = "Elliot" userSName = "Hardy" userRole = "ADMINISTRATOR"/>
                    </div>
                </main>   
            );
        }
    };

    return (
        <main>
            {renderContent()}
        </main>   
    );
}