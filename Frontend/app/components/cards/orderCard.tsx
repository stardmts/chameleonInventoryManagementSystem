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
            fetch(`http://localhost:8080/api/Loans/Order/${orderId}`, {credentials: 'include'})
            .then((data) => data.json())
            .then((data) => setLoans(data))
        } catch (err) {
            console.error("Fetch error", err)   
       }
    };

    const [costumeId, SetCostumeId] = useState('');

    const [pickQuantity, setPickQuantity] = useState('1');
    
    const [add, setAdd] = useState(false);

    const NewPick: Loan = {
        loanId: (orderId + "-" + costumeId),
        orderId: orderId,
        startDate: startDate,
        endDate: endDate,
        costumeId: costumeId,
        quantity: Number(pickQuantity),
        status: "TO_BE_PICKED"
    }

    const submitNewLoan = async (NewPick) => {
        try {
            const response = await fetch('http://localhost:8080/api/Loans/AddLoan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(NewPick)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

        } catch (err) {
            console.error("Failed to create new loan item:", err);
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
                        <button onClick = {() => {setAdd(!add)}} className = "flex flex-row w-30 items-center px-2 py-2 border-2 border-white rounded-full">
                            {!add ? "Add To Order" : "Close" }
                        </button>
                        {add && (
                            <div className = "flex flex-col text-left space-y-2 w-auto bg-[#323232] p-2 rounded-xl">
                                <header className = "lg:text-xl text-white">
                                    Add To Order
                                </header>
                                <div className = "flex flex-col space-y-0">
                                    <header className = "text-white text-sm lg:text-xl"> Enter the costume id: </header>
                                    <input type="text" list="order-list" value={costumeId} onChange={(e) => SetCostumeId(e.target.value)} className="bg-[#484848] border-b-2 border-white rounded-full text-left w-full p-1 lg:p-2.5 text-white placeholder-gray-400 outline-none"/>
                                </div>
                                <div className = "flex flex-col w-auto space-y-0">
                                    <header className = "text-white text-sm lg:text-xl"> Enter the new loan quantity: </header>
                                    <input type = "number" min = "1" value = {pickQuantity} onChange = {(e) => setPickQuantity(e.target.value)} className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                                </div>
                                <button onClick = {() => {submitNewLoan(NewPick), window.location.reload()}} className = "flex flex-row w-48 items-center px-2 py-2 border-2 border-white rounded-full"> 
                                    Add Costumes To Order
                                </button>
                            </div>
                        )}
                    </div>
                )}
        </main>
    );
}