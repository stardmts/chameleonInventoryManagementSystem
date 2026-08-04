"use client";

import OrderCard from "./cards/orderCard";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StockPage() {
    
    const router = useRouter();

    const [search, setSearch ] = useState('');

    return (
        <main className = "flex flex-col bg-[#323232] min-h-screen w-full items-center">
            <div className = "fex flex-col space-y-5">
                <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
                    All stock:
                </header>
                <div className = "flex flex-row w-full text-sm lg:text-xl text-white space-x-2 justify-center">
                    <button className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Completed </button> {/*Filter to only costumes*/}
                    <button className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> In progress </button> {/*Filter to only props*/}
                    <button className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Not started </button> {/*Filter to only tools*/}
                    <button className = "bg-[#323232] border-2 lg:border-4 border-[#d6de00] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#d6de00] [@media(hover:hover)]:hover:bg-[#d6de00]"> Remove filters </button> {/*display all*/}
                </div>
                <div className = "flex flex-col items-center space-y-2 overflow-y-auto h-auto lg:h-190 w-full text-white rounded px-5 py-5">
                    <OrderCard key = {1} orderId = "1234" userEmailAddress = "Craig@starlightdance.net" startDate = "10/07/2026 00:00:00" endDate = "10/08/2026 00:00:00" loanIds = {["1","2"]} status = "Not started" />
                </div>
            </div>
        </main>   
    );
}