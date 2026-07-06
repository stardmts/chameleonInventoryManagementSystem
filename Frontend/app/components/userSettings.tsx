'use client';

import { useState } from 'react';

export default function UserSettings() {

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    {/*image, qr are auto generated*/}

    return (
        <main className = "flex flex-col items-center w-full min-h-screen py-10">
            <div className = "flex flex-col h-[500] bg-[#323232] space-y-10 p-5 rounded-[15] border-b-2 border-white">
                <div className = "flex flex-col space-y-2">
                    <header className = "text-white text-1xl"> Reset password </header>
                    <input type = "text" value = {password2} onChange = {(e) => setPassword2(e.target.value)} placeholder = "Enter your old password..." className = "text-white text-left bg-[#484848] p-2 rounded-full border-b-2 border-white"/>
                    <input type = "text" value = {password1} onChange = {(e) => setPassword1(e.target.value)} placeholder = "Enter your new password..." className = "text-white text-left bg-[#484848] p-2 rounded-full border-b-2 border-white"/>
                    <input type = "text" value = {password2} onChange = {(e) => setPassword2(e.target.value)} placeholder = "Enter your new password again..." className = "text-white text-left bg-[#484848] p-2 rounded-full border-b-2 border-white"/>
                    <button className = "text-white p-2 bg-[#484848] rounded-full hover:bg-[#262626] shadow-2xl"> Submit </button>
                </div>
                <div className = "flex flex-col w-full">
                    <button className = "text-white p-2 bg-[#484848] rounded-full hover:bg-[#262626] shadow-2xl"> Request administrator role </button>
                </div>
            </div>
        </main>
    );
}