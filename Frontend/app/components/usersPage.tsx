"use client";

import { useRouter } from "next/navigation";
import UserCard from "./cards/userCard";
import { useState, useEffect } from "react";

interface User {
    userId: string;
    userEmail: string;
    firstName: string;
    secondName: string;
    userRole: string;
}

export default function UsersPage() {
    
    const router = useRouter();

    const [users, setUsers] = useState<User[]>([])

    const loadUsers = async () => {
        try {
            fetch('http://localhost:8080/api/Users', {credentials: 'include'})
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

            const response = await fetch(`http://localhost:8080/api/Users/Search/${search}`, {credentials: 'include'})

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


    return (
      <main className = "flex flex-col min-h-screen w-full items-center space-y-5 bg-[#323232]">
        <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
          All users:
        </header>
        <div className = "flex flex-col space-y-2 lg:flex-row items-center justify-between w-full px-2 lg:px-10">
          <div className = "flex flex-row space-x-5 w-full">  
            <input type = "text" onChange = {(e) => search(e.target.value)} placeholder = "Search users..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
            <button onClick = {() => {setUsers([]), loadUsers()}} className = "text-white bg-[#484848] border-2 border-white rounded-full p-1" > Clear Search </button>
          </div>   
          <div className = "flex flex-row space-x-2 px-2">
            <button  className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Admin </button> {/*add user page*/}
            <button  className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#FF1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> All users </button> {/*remove user page*/}
            <button onClick = {() => router.push('/addUser')} className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Add user </button> {/*remove user page*/}
          </div>
        </div>
        <div className = "flex flex-col items-center space-y-2 overflow-y-auto bg-[#323232] w-full text-white rounded px-2 lg:p-5">
          {users.map((user) => <UserCard key = {user.userId} userId = {user.userId} userEmail = {user.userEmail} firstName = {user.firstName} secondName = {user.secondName} userRole = {user.userRole}/>)}
        </div>
      </main>
    );
}   