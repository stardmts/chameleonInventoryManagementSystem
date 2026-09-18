"use client";

import { useState, useEffect } from "react";
import TransactionCard from "./cards/transactionCard";

interface Transaction {
    transactionId: string;
    transactionBody: string;
    transactionDate: string;
    user: string;
}

export default function TransactionPage() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const loadTransactions = async () => {
        try {
            fetch('http://localhost:8080/api/Transactions')
            .then((data) => data.json())
            .then((data) => setTransactions(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };

    const search = async (search) => {
        try {
            
            if (search == "") {
                setTransactions([]);
                loadTransactions();
                return;
            }

            const response = await fetch(`http://localhost:8080/api/Transactions/Search/${search}`)

            if(!response.ok) {
                throw new Error('Http error' + response.status)
            }

            const data = await response.json();
            setTransactions(data)
            
        } catch (err) {
            console.error("Search error", err)
        }
    };

    useEffect(() => {
        loadTransactions();
    }, [])

    return (
        <main className = "flex flex-col w-full items-center space-y-10 bg-[#323232]">
            <header className = "text-center bg-[#484848] w-full p-0.75 border-b-2 text-white text-sm lg:text-2xl border-white">
                All Transactions:
            </header>
            <div className = "flex flex-row space-x-5 w-full px-5">  
                <input type = "text" onChange = {(e) => search(e.target.value)} placeholder = "Search the costume catalogue..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
                <button onClick = {() => {setTransactions([]), loadTransactions()}} className = "text-white bg-[#484848] border-2 border-white rounded-full p-1" > Clear Search </button>
            </div> 
            <div className = "flex flex-col items-center space-y-2 overflow-y-auto bg-[#323232] lg:h-190 w-full text-white rounded px-5 py-5">
                {transactions.map((transaction) => (<TransactionCard key = {transaction.transactionId} transactionId = {transaction.transactionId} transactionBody = {transaction.transactionBody} transactionDate = {transaction.transactionDate} user = {transaction.user}/>))}               
            </div>
        </main>   
    );
}