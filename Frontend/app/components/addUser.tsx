'use client';

import { useState } from 'react';

export default function AddUser() {
    
    const [fName, setFName] = useState('');
    const [sName, setSName] = useState('');
    const [email, setEmail] = useState('');
    const [fPswd, setFPswd] = useState('');
    const [sPswd, setSPswd] = useState('');
    const [selectedChoice, setSelectedChoice] = useState('');

    return (
        <main className = "flex flex-col w-full min-h-screen items-center space-y-5 p-10">
            <div className = "flex flex-col space-y-2">
                <header className = "text-white text-1xl"> Enter the user's first name </header>
                <input type = "text" value = {fName} onChange = {(e) => setFName(e.target.value)} placeholder = "Enter the user's first name..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-[15] border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the user's last name </header>
                <input type = "text" value = {sName} onChange = {(e) => setSName(e.target.value)} placeholder = "Enter the user's last name..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the users e-mail address </header>
                <input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "Enter the user's e-mail address..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter a password </header>
                <input type = "text" value = {fPswd} onChange = {(e) => setFPswd(e.target.value)} placeholder = "Enter the password..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the password again </header>
                <input type = "text" value = {sPswd} onChange = {(e) => setSPswd(e.target.value)} placeholder = "Enter the password again..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Choose the user role </header>
                <select value = {selectedChoice} onChange = {(e) => setSelectedChoice(e.target.value)} className="bg-[#484848] border-b-2 border-white text-white text-left rounded-full block w-full p-2.5">
                    <option value="" hidden> Choose the user's role </option>
                    <option value="CA"> Viewer </option>
                    <option value="FR"> Admin </option>
                </select>            
            </div>
            <button className = "text-white p-2 bg-[#484848] rounded-full hover:bg-[#262626] shadow-2xl"> Add user </button>
        </main>
    );
}