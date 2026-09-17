"use client";

interface Loan {
    loanId: string,
    orderId: string,
    startDate: string,
    endDate: string,
    costumeId: string,
    quantity: number,
    status: string
}

interface Costume {
    costumeId: string;
    name: string;
    group: string;
    category: string[];
    colour: string[];
    size: string;
    quantity: number;
    inStock: number;
    locationCode: string;
    lastUpdated: string;
    cost: number;
    imageUrl: string;
}

import {useEffect, useState } from "react";

export default function loanCard({loanId, orderId, startDate, endDate, costumeId, quantity, status} : Loan) {

    const [pick, setPick] = useState(false);

    const [costume, setCostume] = useState<Costume | null>(null);

    const loadCostume = async () => {
        try {
            fetch(`http://localhost:8080/api/Costumes/${costumeId}`)
            .then((data) => data.json())
            .then((data) => setCostume(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };

    const handleAutoPick = async () => {
        try {
            fetch(`http://localhost:8080/api/Loans/Update/${loanId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loanStatusUpdateData)
            })

            window.location.reload();
            
        } catch (err) {
            console.error("Fetch error", err)
        }
    }

    const loanStatusUpdateData: Loan = {
        loanId: loanId,
        orderId: orderId,
        startDate: startDate,
        endDate: endDate,
        costumeId: costumeId,
        quantity: quantity,
        status: "PICKED"
    }

    useEffect(() => {
        loadCostume();    
    },[])

    return (
        <div className = "flex flex-row items-center space-x-5 w-full bg-[#323232] p-3 rounded-xl shadow-2xl border-b-2 border-white">
            <a href = {costume?.imageUrl}>
                <img src={costume?.imageUrl} className="h-33 w-70 lg:h-60 lg:w-45 rounded"/>
            </a>
            <div className = "space-y-2">
                <p className = "text-white text-sm lg:text-2xl w-full text-left px-2">
                    Costume ID: {costumeId} | Quantity: {quantity} | Location: {costume?.locationCode} | Status: {status}
                </p>
                {(status != "PICKED") && (<button onClick = {() => handleAutoPick()} className = "bg-[#484848] p-1 lg:p-2 border-2 border-white rounded-full text-sm"> Auto pick </button>)}
            </div>
        </div>
    );
}