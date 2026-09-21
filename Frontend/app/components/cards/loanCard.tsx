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

    const [costume, setCostume] = useState<Costume | null>(null);

    const [selectedStatus, setSelectedStatus] = useState("LAUNDRY");

    const [returnQuantity, setReturnQuantity] = useState(1);

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

    const handleReturn = async () => {

        const loanReturnUpdateData: Loan = {
            loanId: loanId,
            orderId: orderId,
            startDate: startDate,
            endDate: endDate,
            costumeId: costumeId,
            quantity: (quantity - returnQuantity),
            status: "RETURNED",
        }

        const loanUpdateData: Loan = {
            loanId: (loanId+ "-" +selectedStatus),
            orderId: orderId,
            startDate: startDate,
            endDate: endDate,
            costumeId: costumeId,
            quantity: returnQuantity,
            status: selectedStatus,
        }

        if (["REPAIR","LAUNDRY","MISSING"].includes(selectedStatus)) {
            try {
                const response = await fetch('http://localhost:8080/api/Loans/AddLoan', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loanUpdateData)
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                try {
                    
                    fetch(`http://localhost:8080/api/Loans/Update/${loanId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(loanReturnUpdateData)
                    })

                    window.location.reload();

                } catch (err) {
                    console.log("Failed to update loan" + err)
                }

            } catch (err) {
                console.log("Failed to add loan" + err)
            }
        }
        else {
            try {
                fetch(`http://localhost:8080/api/Loans/Update/${loanId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loanReturnUpdateData)
                })

                window.location.reload();

            } catch (err) {
                console.log("Failed to update loan" + err)
            }
        }
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
                {(status === "TO_BE_PICKED") && (<button onClick = {() => handleAutoPick()} className = "bg-[#484848] p-1 lg:p-2 border-2 border-white rounded-full text-sm"> Auto pick </button>)}
                {((status === "READY_TO_RETURN") || (status === "REPAIR") || (status === "LAUNDRY") || (status === "MISSING")) && (
                    <div className = "flex flex-col space-y-1">
                        <header className = "text-white text-sm lg:text-xl"> Update the Loan Status </header>
                        <select value={selectedStatus} onChange={(e) => (setSelectedStatus(e.target.value))} className="bg-[#484848] border-b-2 border-white rounded-full text-left p-1 lg:p-2.5">
                            <option value="LAUNDRY"> Laundry </option>
                            <option value="RETURNED"> Returned </option>
                            <option value="REPAIR"> Repair </option>
                            <option value="MISSING"> Missing </option>
                        </select>
                        <header className = "text-white text-sm lg:text-xl"> Choose the update quantity </header>
                        <input type = "number" min = "1" max = {quantity} value = {returnQuantity} onChange = {(e) => setReturnQuantity(Number(e.target.value))} placeholder = "Enter the quantity..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                        <button onClick = {() => handleReturn()} className = "bg-[#484848] p-1 lg:p-2 border-2 border-white rounded-full text-sm"> Update loan </button>
                    </div>
                )}
            </div>
        </div>
    );
}