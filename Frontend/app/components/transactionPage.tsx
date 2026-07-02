"use client";

import { useState } from "react";
import TransactionCard from "./transactionCard";

export default function TransactionPage() {

    const [search, setSearch ] = useState('');

    return (
        <main className = "flex flex-col items-center space-y-5 bg-[#323232]">
            <header className = "text-center bg-[#484848] w-full p-0.75 border-b-2 text-white text-2xl border-white">
                All Transactions:
            </header>
            <div className = "flex flex-row items-left w-full px-10"> 
                <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = "Search transactions..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            </div>
            <div className = "flex flex-col items-center space-y-2 overflow-y-auto bg-[#323232] h-190 w-431 text-white rounded px-5 py-5">
                <TransactionCard key = "1" transactionId = "32" transactionBody = "signed out 3 size M pink dresses (itemCode: 5094)" transactionDate = "01/07/2026" user = "Claire"/>
                <TransactionCard key = "2" transactionId = "45" transactionBody = "signed out 7 size M pink dresses (itemCode: 5091)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "3" transactionId = "63" transactionBody = "signed in 9 size M orange dresses (itemCode: 5032)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "4" transactionId = "74" transactionBody = "signed out 3 size M blue dresses (itemCode: 5056)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "5" transactionId = "95" transactionBody = "signed out 5 size M red dresses (itemCode: 5087)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "6" transactionId = "106" transactionBody = "signed in 7 size M green dresses (itemCode: 5090)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "7" transactionId = "112" transactionBody = "signed out 1 size M pink dresses (itemCode: 5091)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "8" transactionId = "134" transactionBody = "signed in 7 size M pink dresses (itemCode: 5092)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "9" transactionId = "145" transactionBody = "signed out 9 size M blue tutus (itemCode: 5098)" transactionDate = "01/07/2026" user = "Claire"/> 
                <TransactionCard key = "10" transactionId = "1454" transactionBody = "signed in 3 size yellow tutus (itemCode: 5096)" transactionDate = "01/07/2026" user = "Claire"/>                             
            </div>
        </main>   
    );
}