"use client";

import NoticeCard from './cards/noticeCard';
import DeadlineCard from './cards/deadlineCard';

export default function StaffHomePage() {

    return (
            <div className = "flex flex-col py-4 px-3 space-y-3 items-center min-h-screen w-full lg:flex-row lg:justify-around">
                <div className = "flex flex-col overflow-y-auto items-center bg-[#323232] border-2 border-white h-90 w-full lg:h-175 lg:w-175 text-white rounded space-y-2">
                    <header className = "text-center bg-[#484848] w-full lg:w-175 p-1 border-b-2 text-sm lg:text-2xl border-white">
                        Notice board:
                    </header>
                    <NoticeCard key = "1" noticeId = '1' noticeBody = 'Pink dresses have been permantly removed from starlight stock' noticeDate = '14/06/2026' sender = 'Nadine'/>               
                </div>
                <div className = "flex flex-col overflow-y-auto items-center bg-[#323232] border-2 border-white h-90 w-full lg:h-175 lg:w-175 text-white rounded space-y-2">
                    <header className = "text-center bg-[#484848] w-full lg:w-175 p-1 border-b-2 text-sm lg:text-2xl border-white">
                        Upcoming deadlines:
                    </header>
                    <DeadlineCard key = "1" deadlineId = '1' show = 'SEVEN' deadlineBody = 'Final program draft sent off' deadline = '10/09/2026'/>                         
                </div>
            </div>
    );
}