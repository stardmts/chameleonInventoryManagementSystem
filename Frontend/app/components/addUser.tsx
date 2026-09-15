'use client';

import { useState } from 'react';

interface User {
    userEmail:string;
    userFName: string;
    userSName: string;
    userPassword: string;
    userRole: string;
}

export default function AddUser() {
    
    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');
    const [email, setEmail] = useState('');
    const [fPswd, setFPswd] = useState('');
    const [sPswd, setSPswd] = useState('');
    const [selectedChoice, setSelectedChoice] = useState('');

    const resetAllUser = () => {
        setFName(''),
        setSName(''),
        setEmail(''),
        setFPswd(''),
        setSPswd(''),
        setSelectedChoice('');
    }

    const userData: User = {
        userEmail: email,
        userFName: fName,
        userSName: sName,
        userPassword: sPswd,
        userRole: selectedChoice,
    } 

    const createUser = async (userData) => {
        try {
            const response = await fetch('http://localhost:8080/api/Users/AddUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            resetAllUser();

        } catch (err) {
            console.error('Failed to create user', err)
        }
    }

    return (
        <main className = "flex flex-col p-10">
            <div className = "flex flex-col bg-[#323232] w-full items-center space-y-2 lg:space-y-5 p-3 lg:p-10 border-4 border-[#6dabe3] rounded-xl">
                <header className = "text-xl lg:text-2xl text-white"> Add user: </header>
                <div className = "flex flex-col space-y-2 text-white text-sm lg:text-xl">
                    <div className = "flex flex-col space-y-1">
                        <header> Enter the user's first name </header>
                        <input type = "text" value = {fName} onChange = {(e) => setFName(e.target.value)} placeholder = "First name..." className = "bg-[#484848] border-b-2 border-white text-left rounded-full block w-full p-1 lg:p-2.5"/>
                    </div>    
                    <div className = "flex flex-col space-y-1">    
                        <header> Enter the user's last name </header>
                        <input type = "text" value = {sName} onChange = {(e) => setSName(e.target.value)} placeholder = "Last name..." className = "bg-[#484848] border-b-2 border-white text-left rounded-full block w-full p-1 lg:p-2.5"/>
                    </div>    
                    <div className = "flex flex-col space-y-1">    
                        <header> Enter the users e-mail address </header>
                        <input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "E-mail address..." className = "bg-[#484848] border-b-2 border-white text-left rounded-full block w-full p-1 lg:p-2.5"/>
                    </div>    
                    <div className = "flex flex-col space-y-1">    
                        <header> Enter a password </header>
                        <input type = "text" value = {fPswd} onChange = {(e) => setFPswd(e.target.value)} placeholder = "Password..." className = "bg-[#484848] border-b-2 border-white text-left rounded-full block w-full p-1 lg:p-2.5"/>
                    </div>    
                    <div className = "flex flex-col space-y-1">   
                        <header> Enter the password again </header>
                        <input type = "text" value = {sPswd} onChange = {(e) => setSPswd(e.target.value)} placeholder = "Password again..." className = "bg-[#484848] border-b-2 border-white text-left rounded-full block w-full p-1 lg:p-2.5"/>
                    </div>    
                    <div className = "flex flex-col space-y-1">    
                        <header> Choose the user role </header>
                        <select value = {selectedChoice} onChange = {(e) => setSelectedChoice(e.target.value)} className = "bg-[#484848] border-b-2 border-white text-left rounded-full block w-full p-1 lg:p-2.5">
                            <option value="" hidden> Choose the user's role </option>
                            <option value="USER"> Viewer </option>
                            <option value="ADMIN"> Admin </option>
                        </select>            
                    </div>
                </div>
                <button onClick = {() => {createUser(userData)}} className = "text-white text-sm lg:text-xl p-1 lg:p-2 bg-[#484848] rounded-full hover:bg-[#262626] shadow-2xl"> Add user </button>
            </div>
        </main>
    );
}