"use client";

import NoticeCard from './noticeCard';
import DeadlineCard from './deadlineCard';

export default function StaffHomePage() {

    return (
        <div className = "grid grid-cols-2 gap-20 py-10 px-35">
            <div className = "flex flex-col space-y-10 items-center">
                <div className = "flex flex-col overflow-y-auto items-center bg-[#323232] border-2 border-white h-175 w-175 text-white rounded space-y-2">
                    <header className = "text-center bg-[#484848] w-175 p-1 border-b-2 text-2xl border-white">
                        Upcoming deadlines:
                    </header>
                    <DeadlineCard key = "1" deadlineId = '1' show = 'SEVEN' deadlineBody = 'Final program draft sent off' deadline = '10/09/2026'/>                          
                </div>
            </div>
            <div className = "flex flex-col overflow-y-auto items-center bg-[#323232] border-2 border-white h-175 w-175 text-white rounded space-y-2">
                <header className = "text-center bg-[#484848] w-175 p-1 border-b-2 text-2xl border-white">
                    Notice board:
                </header>
                <NoticeCard key = "1" noticeId = '1' noticeBody = 'Pink dresses have been permantly removed from starlight stock' noticeDate = '14/06/2026' sender = 'Nadine'/>               
            </div>
        </div>
    );
}