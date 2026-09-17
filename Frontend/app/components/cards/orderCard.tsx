"use client";

interface order {
    orderId: string,
    userEmailAddress: string,
    startDate: string,
    endDate: string,
    status: string
}

interface Loan {
    loanId: string,
    orderId: string,
    startDate: string,
    endDate: string,
    costumeId: string,
    quantity: number,
    status: string
}

import { useState } from "react";
import LoanCard from "../cards/loanCard";

export default function orderCard({orderId, userEmailAddress, startDate, endDate, status} : order) {

    const [pick, setPick] = useState(false);

    const [loans, setLoans] = useState<Loan[]>([]);

    const loadLoans = async () => {
        try {
            fetch(`http://localhost:8080/api/Loans/Order/${orderId}`)
            .then((data) => data.json())
            .then((data) => setLoans(data))
        } catch (err) {
            console.error("Fetch error", err)   
       }
    };

    return (
        <main className = "flex flex-row border-b-2 border-white rounded-xl bg-[#484848] w-full px-2 py-2 space-x-5 shadow-2xl">
            { !pick && (
                <button onClick = {() => {setPick(!pick), loadLoans()}} className = "flex flex-row w-full px-2 py-2 space-x-5">
                    <p className = "text-white text-sm lg:text-2xl w-full text-left px-2">
                        {orderId} | {userEmailAddress} | Start date: {startDate} | End date: {endDate} | {status}
                    </p>
                </button>
            )}
            {pick && (
                <div className = "flex flex-col text-left space-y-2 w-full">
                    <header className = "lg:text-2xl text-white"> Order number: {orderId} | Order for: {userEmailAddress} </header>
                    <div className = "flex flex-col items-center space-y-2 overflow-y-auto w-full text-white rounded  py-5">
                        {loans.map((loan) => (<LoanCard key = {loan.loanId} loanId = {loan.loanId} orderId = {loan.orderId} startDate = {loan.startDate} endDate = {loan.endDate} costumeId = {loan.costumeId} quantity = {loan.quantity} status = {loan.status}/>))}
                    </div>
                </div>
            )}
        </main>
    );
}