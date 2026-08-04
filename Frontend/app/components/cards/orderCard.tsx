"use client";

interface order {
    orderId: string,
    userEmailAddress: string,
    startDate: string,
    endDate: string,
    loanIds: string[],
    status: string
}

import { useState } from "react";

export default function orderCard({orderId, userEmailAddress, startDate, endDate, loanIds, status} : order) {

    const [pick, setPick] = useState(false);

    return (
        <button onClick = {() => setPick(!pick)} className = "flex flex-row border-b-2 border-white rounded-xl bg-[#484848] items-center w-full px-2 py-2 space-x-5 text-wrap shadow-2xl">
            { !pick && (    
                <p className = "text-white text-sm lg:text-2xl w-full items-center">
                    {orderId} | {userEmailAddress} | {startDate} | {endDate} | {status}
                </p>
            )}
            {pick && (
                <div className = "flex flex-row items-center w-full min-h-screen space-x-5">
                    {/*all loans in order come up here as buttons where they can be pressed and takent o the QR scanner to pick the outfit
                    */}
                </div>
            )}
        </button>
    );
}