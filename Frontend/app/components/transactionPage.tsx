"use client";


export default function TransactionPage() {

    return (
        <main className = "flex flex-col items-center">
            <header className = "text-center bg-[#484848] w-full p-0.75 border-b-2 text-white text-2xl border-white">
                All Transactions:
            </header>
            <div className = "grid grid-cols-2 items-center gap-2 overflow-y-auto items-center bg-[#111111] h-190 w-435 text-white rounded px-13 py-5">

            </div>
        </main>    
    );
}