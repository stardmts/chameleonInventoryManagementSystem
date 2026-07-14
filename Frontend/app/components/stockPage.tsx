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
        <main className = "flex flex-col bg-[#323232] min-h-screen w-full items-center">
            <div className = "fex flex-col space-y-5">
                <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
                    All stock:
                </header>
                <div className = "flex flex-col space-y-2 lg:flex-row justify-center lg:justify-between w-full text-sm lg:text-xl">
                    <div className = "px-2">  
                        <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder = "Search the catalogue..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
                    </div>  
                    <div className = "flex flex-row w-full text-sm lg:text-xl text-white space-x-2 justify-center">
                        <button className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Costumes </button> {/*Filter to only costumes*/}
                        <button className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Props </button> {/*Filter to only props*/}
                        <button className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Tools </button> {/*Filter to only tools*/}
                        <button className = "bg-[#323232] border-2 lg:border-4 border-[#d6de00] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#d6de00] [@media(hover:hover)]:hover:bg-[#d6de00]"> Remove filters </button> {/*display all*/}
                    </div>
                </div>
                <div className = "flex flex-col items-center space-y-2 overflow-y-auto h-auto lg:h-190 w-full lg:w-431 text-white rounded px-5 py-5">
                    <CostumeCard key = '5003' costumeId = "5007" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child small" quantity = {20} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {2} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/>              
                    <CostumeCard key = '5004' costumeId = "5008" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child medium" quantity = {15} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {13} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/>
                    <PropCard key = '0002' propId = "0001" name = "Wonka Bar" variant = "Brown" quantity = {15} locationCode = "Zone 4" cost = "£3.00" imageURL = "../propImages/0001.webp" qrString=""/>
                    <ToolCard key = "0006" toolId = "0001" name = "Impact Driver" quantity = {2} location = "HQ tool shed" condition = "used" assignedTo = "Kev" ownedBy = "Kev" category = "Tool" imageURL = "../toolImages/0001.jpg" qrString=""/>                 
                    <CostumeCard key = '5005' costumeId = "5009" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child large" quantity = {10} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {7} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/>              
                    <CostumeCard key = '5006' costumeId = "5010" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "child extra large" quantity = {5} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {5} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/> 
                    <CostumeCard key = '5007' costumeId = "5007" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "S" quantity = {20} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {2} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/>
                    <PropCard key = '0003' propId = "0001" name = "Wonka Bar" variant = "Brown" quantity = {15} locationCode = "Zone 4" cost = "£3.00" imageURL = "../propImages/0001.webp" qrString=""/>                 
                    <CostumeCard key = '5008' costumeId = "5008" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "M" quantity = {15} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {13} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/>              
                    <CostumeCard key = '5009' costumeId = "5009" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "L" quantity = {10} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {7} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/>
                    <ToolCard key = "0004" toolId = "0001" name = "Impact Driver" quantity = {2} location = "HQ tool shed" condition = "used" assignedTo = "Kev" ownedBy = "Kev" category = "Tool" imageURL = "../toolImages/0001.jpg" qrString=""/>              
                    <CostumeCard key = '5010' costumeId = "5010" name = "red tutu" group = "red tutus" category = "tutus" colour = "red" size = "XL" quantity = {5} locationCode = "abcdef" lastUpdated = "01/07/2026" notes = "" inStock = {5} imageURL = "../costumeImages/5007.jpg" cost = "£10.00" qrString=""/>
                    <PropCard key = '0001' propId = "0001" name = "Wonka Bar" variant = "Brown" quantity = {15} locationCode = "Zone 4" cost = "£3.00" imageURL = "../propImages/0001.webp" qrString=""/>
                    <ToolCard key = "0005" toolId = "0001" name = "Impact Driver" quantity = {2} location = "HQ tool shed" condition = "used" assignedTo = "Kev" ownedBy = "Kev" category = "Tool" imageURL = "../toolImages/0001.jpg" qrString=""/>                            
                </div>
            </div>
        </main>   
    );
}