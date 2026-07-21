"use client";

import NoticeCard from './cards/noticeCard';
import DeadlineCard from './cards/deadlineCard';

export default function StaffHomePage() {

    return (
            <div className = "flex flex-col py-4 px-3 space-y-3 items-center min-h-screen w-full lg:flex-row lg:justify-around">
                <div className = "flex flex-col overflow-y-auto items-center bg-[#323232] border-2 border-white min-h-screen w-full text-white rounded space-y-2">
                    <header className = "text-center bg-[#484848] w-full p-1 border-b-2 text-sm lg:text-2xl border-white">
                        Notice board:
                    </header>
                    <NoticeCard key = "1" noticeId = '1' noticeBody = 'Pink dresses have been permantly removed from starlight stock' noticeDate = '14/06/2026' sender = 'Nadine'/>               
                </div>
            </div>
    );
}