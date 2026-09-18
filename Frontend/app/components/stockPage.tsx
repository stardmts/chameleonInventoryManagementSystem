"use client";

import CostumeCard from "./cards/costumeStockCard";
import PropCard from "./cards/propStockCard";
import ToolCard from "./cards/toolStockCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

interface Prop {
    propId: string;
    name: string;
    variant: string;
    quantity: number;
    locationCode: string;
    cost: string;
    imageURL: string;
}

interface Tool {
    toolId: string;
    name: string;
    quantity: number;
    location: string;
    condition: string;
    assignedTo: string;
    ownedBy: string;
    category: string;
    imageURL: string;
}

export default function StockPage() {

    const [costumes, setCostumes] = useState<Costume[]>([]);
    const [props, setProps] = useState<Prop[]>([]);
    const [tools, setTools] = useState<Tool[]>([]);

    const clearAll = () => {
        setCostumes([]);
        setTools([]);
        setProps([]);
    }

    const searchCostumes = async (search) => {
        try {
            
            if (search == "") {
                clearAll();
                loadAll();
                return;
            }

            const response = await fetch(`http://localhost:8080/api/Costumes/Search/${search}`)

            if(!response.ok) {
                throw new Error('Http error' + response.status)
            }

            const data = await response.json();
            setCostumes(data);
            setTools([]);
            setProps([]);
            
        } catch (err) {
            console.error("Search error", err)
        }
    };
    
    const loadCostumes = async () => {
        try {
            fetch('http://localhost:8080/api/Costumes')
            .then((data) => data.json())
            .then((data) => setCostumes(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };
    
    const loadProps = async () => {
        try {
            fetch('http://localhost:8080/api/Props')
            .then((data) => data.json())
            .then((data) => setProps(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };
    
    const loadTools = async () => {
        try {
            fetch('http://localhost:8080/api/Tools')
            .then((data) => data.json())
            .then((data) => setTools(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };
        
    const loadAll = async () => {
        await Promise.all([loadCostumes(),loadProps(),loadTools()]);
    }

    useEffect(() => {
        loadAll();
    }, []) 

    return (
        <main className = "flex flex-col bg-[#323232] space-y-5 min-h-screen w-full items-center">
            <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
                All stock:
            </header>                
                <div className = "flex flex-col space-y-2 lg:flex-row justify-center lg:justify-between w-full text-sm lg:text-xl px-5">
                    <div className = "flex flex-row space-x-5 w-full">  
                        <input type = "text" onChange = {(e) => searchCostumes(e.target.value)} placeholder = "Search the costume catalogue..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
                        <button onClick = {() => {clearAll(), loadAll()}} className = "text-white bg-[#484848] border-2 border-white rounded-full p-1" > Clear Search </button>
                    </div>  
                    <div className = "flex flex-row w-full text-sm lg:text-xl text-white space-x-2 justify-center">
                        <button onClick = {() => {setTools([]), setProps([]), loadCostumes();}} className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Costumes </button>
                        <button onClick = {() => {setTools([]), loadProps(), setCostumes([]);}}className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Props </button>
                        <button onClick = {() => {loadTools(), setProps([]), setCostumes([]);}}className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Tools </button>
                        <button onClick = {() => loadCostumes()} className = "bg-[#323232] border-2 lg:border-4 border-[#d6de00] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#d6de00] [@media(hover:hover)]:hover:bg-[#d6de00]"> Remove filters </button>
                    </div>
                </div>
                <ul className = "flex flex-col items-center space-y-2 overflow-y-auto h-auto lg:min-h-screen w-full text-white rounded px-5 py-5">
                    {costumes.map((costume) => (<CostumeCard key = {costume.costumeId} costumeId = {costume.costumeId} name = {costume.name} group = {costume.group} category = {costume.category} colour = {costume.colour} size = {costume.size} quantity = {costume.quantity} locationCode = {costume.locationCode} lastUpdated = {costume.lastUpdated} inStock = {costume.inStock} cost = {costume.cost} imageUrl = {costume.imageUrl}/>))}
                    {props.map((prop) => (<PropCard key = {prop.propId} propId = {prop.propId} name = {prop.name} variant = {prop.variant} quantity = {prop.quantity} locationCode = {prop.locationCode} cost = {prop.cost} imageURL = {prop.imageURL} />))}
                    {tools.map((tool) => (<ToolCard key = {tool.toolId} toolId = {tool.toolId} name = {tool.name} quantity = {tool.quantity} location = {tool.location} condition = {tool.condition} assignedTo = {tool.assignedTo} ownedBy = {tool.ownedBy} category = {tool.category} imageURL = {tool.imageURL} />))}
                </ul>
        </main>   
    );
}