"use client";

import CostumeCard from "./cards/costumeStockCard";
import PropCard from "./cards/propStockCard";
import ToolCard from "./cards/toolStockCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StockPage() {
    
    const router = useRouter();

    const [search, setSearch ] = useState('');

    return (
        <main className = "flex flex-col items-center space-y-5 bg-[#323232]">
            <header className = "text-center bg-[#484848] w-full p-0.75 border-b-2 text-white text-2xl border-white">
                All stock:
            </header>
            <div className = "flex flex-row items-center justify-between w-full px-10">
                <div>  
                    <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = "Search the catalogue..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                </div>  
                <div className = "flex flex-row space-x-2 px-2">
                    <button className = "bg-[#323232] border-4 border-[#6dabe3] p-2 text-white rounded-full hover:bg-[#6dabe3]"> Costumes </button> {/*Filter to only costumes*/}
                    <button className = "bg-[#323232] border-4 border-[#ff1200] p-2 text-white rounded-full hover:bg-[#ff1200]"> Props </button> {/*Filter to only props*/}
                    <button className = "bg-[#323232] border-4 border-[#e97187] p-2 text-white rounded-full hover:bg-[#e97187]"> Tools </button> {/*Filter to only tools*/}
                    <button className = "bg-[#323232] border-4 border-[#d6de00] p-2 text-white rounded-full hover:bg-[#d6de00]"> Remove filters </button> {/*display all*/}
                    <button onClick = {() => router.push('/addStock')} className = "bg-[#323232] border-4 border-[#ec7705] p-2 text-white rounded-full hover:bg-[#ec7705]"> Add new item </button> {/*bring up an add new item*/}
                </div>
            </div>
            <div className = "flex flex-col items-center space-y-2 overflow-y-auto bg-[#323232] h-190 w-431 text-white rounded px-5 py-5">
                <CostumeCard key = '5003' costumeId = "5007" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child small" quantity = {20} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {2} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" />              
                <CostumeCard key = '5004' costumeId = "5008" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child medium" quantity = {15} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {13} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" />
                <PropCard key = '0002' propId = "0001" name = "Wonka Bar" variant = "Brown" quantity = {15} locationCode = "Zone 4" cost = "£3.00" imageURL = "../propImages/0001.webp" />
                <ToolCard key = "0006" toolId = "0001" name = "Impact Driver" quantity = {2} location = "HQ tool shed" condition = "used" assignedTo = "Kev" ownedBy = "Kev" category = "Tool" imageURL = "../toolImages/0001.jpg" />                 
                <CostumeCard key = '5005' costumeId = "5009" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child large" quantity = {10} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {7} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" />              
                <CostumeCard key = '5006' costumeId = "5010" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child extra large" quantity = {5} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {5} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" /> 
                <CostumeCard key = '5007' costumeId = "5007" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "S" quantity = {20} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {2} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" />
                <PropCard key = '0003' propId = "0001" name = "Wonka Bar" variant = "Brown" quantity = {15} locationCode = "Zone 4" cost = "£3.00" imageURL = "../propImages/0001.webp" />                 
                <CostumeCard key = '5008' costumeId = "5008" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "M" quantity = {15} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {13} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" />              
                <CostumeCard key = '5009' costumeId = "5009" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "L" quantity = {10} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {7} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" />
                <ToolCard key = "0004" toolId = "0001" name = "Impact Driver" quantity = {2} location = "HQ tool shed" condition = "used" assignedTo = "Kev" ownedBy = "Kev" category = "Tool" imageURL = "../toolImages/0001.jpg" />              
                <CostumeCard key = '5010' costumeId = "5010" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "XL" quantity = {5} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {5} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" />
                <PropCard key = '0001' propId = "0001" name = "Wonka Bar" variant = "Brown" quantity = {15} locationCode = "Zone 4" cost = "£3.00" imageURL = "../propImages/0001.webp" />
                <ToolCard key = "0005" toolId = "0001" name = "Impact Driver" quantity = {2} location = "HQ tool shed" condition = "used" assignedTo = "Kev" ownedBy = "Kev" category = "Tool" imageURL = "../toolImages/0001.jpg" />                            
            </div>
        </main>   
    );
}