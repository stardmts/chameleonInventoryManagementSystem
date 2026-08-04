"use client";

import NoticeCard from './cards/noticeCard';
import DeadlineCard from './cards/deadlineCard';
import { useState } from 'react';

export default function StaffHomePage() {

    const [notice, setNotice] = useState(false);

    const [noticeBody, setNoticeBody] = useState('');

    const submitNotice = () => {
        setNotice(!notice)

    }

    return (
            <div className = "flex flex-col py-4 px-3 space-y-3 items-center min-h-screen w-full lg:flex-row lg:justify-around">
                <div className = "flex flex-col overflow-y-auto items-center bg-[#323232] border-2 border-white min-h-screen w-full text-white rounded space-y-2">
                    <div className = "flex flex-row justify-between w-full text-center bg-[#484848] p-1 border-b-2 text-sm lg:text-2xl border-white">
                        <header className = "justify-center">
                            Notice board:
                        </header>
                        { !notice && (
                            <button onClick = {() => setNotice(!notice)} className = "bg-[#484848] p-2 rounded-full border-2 border-white">Add notice</button>
                        )}
                        { notice && (
                            <div className = "flex flex-row space-x-2">
                                <input type = "text" value = {noticeBody} onChange = {(e) => setNoticeBody(e.target.value)} placeholder = "Enter the notice..." className = "bg-[#484848] w-full p-2 rounded-full border-2 border-white"/>
                                <button onClick = {() => submitNotice()} className = "bg-[#484848] p-2 rounded-full border-2 border-white" > Sumbit </button>
                            </div>
                        )}
                    </div>
                    <NoticeCard key = "1" noticeId = '1' noticeBody = 'Pink dresses have been permantly removed from starlight stock' noticeDate = '14/06/2026' sender = 'Nadine'/>               
                </div>
            </div>
    );
}