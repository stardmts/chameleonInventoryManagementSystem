interface costume {
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

import { useState } from "react";
import IndividualStockCard from "./individualStockCard";

export default function CostumeCard({costumeId, name, group, category, colour, size, quantity, locationCode, lastUpdated, inStock, cost, imageUrl
} : costume) {

    const [clicked, setClicked] = useState(false);

    return (
        <main className = "flex flex-col lg:flex-row border-b-2 border-white rounded-xl bg-[#484848] lg:items-center w-full px-2 py-2 space-x-5 text-wrap shadow-2xl">
            {(!clicked) && (
                <div className = "flex flex-row space-x-2 text-white w-full text-sm lg:text-2xl justify-between">
                <a href = {imageUrl}>
                    <img src = {imageUrl} className = "h-40 w-50 lg:h-65 lg:w-60 rounded"/>
                </a>
                <button onClick = {() => setClicked(!clicked)} className = "w-full px-5 lg:px-10">
                    <p>
                        {costumeId} | {name} | Group: {group} | Hire cost: £{cost} | Colour: {colour.join(", ")} | Size: {size} |  Category: {category.join(", ")} | Total quantity: {quantity} | Currently in stock: {inStock} | Last updated: {lastUpdated} | {locationCode}
                    </p>
                </button>
                </div>
                )
            }
            {(clicked) && (
                    <button onClick = {() => setClicked(!clicked)} className = "block lg:hidden"> 
                        <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    </button>
                )
            }
            {(clicked) && (<IndividualStockCard key = {costumeId} costumeId = {costumeId} name = {name} group = {group} category = {category} colour = {colour} size = {size} quantity = {quantity} locationCode = {locationCode} lastUpdated = {lastUpdated} inStock = {inStock} cost = {cost} imageUrl = {imageUrl} />)}
            {(clicked) && (
                    <button onClick = {() => setClicked(!clicked)} className = "hidden lg:block lg:px-5"> 
                        <svg
                        className="h-10 w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    </button>
                )
            }
        </main>
    );
}