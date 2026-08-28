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
    category: string;
    colour: string[];
    size: string[];
    quantity: number;
    locationCode: string;
    lastUpdated: string;
    inStock: number;
    cost: string;
    imageURL: string;
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
    
    const router = useRouter();

    const [search, setSearch ] = useState('');

    const [costumes, setCostumes] = useState<Costume[]>([]);
    const [props, setProps] = useState<Prop[]>([]);
    const [tools, setTools] = useState<Tool[]>([]);

    const searchCostumes = async (search) => {
        try {
            fetch(`http://localhost:8080/api/Costumes/Search/${search}`)
            .then((data) => data.json())
            .then((data) => setCostumes(data))
            .then(() => setProps([]))
            .then(() => setTools([]))
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
        <main className = "flex flex-col bg-[#323232] min-h-screen w-full items-center">
            <div className = "fex flex-col space-y-5">
                <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
                    All stock:
                </header>
                <div className = "flex flex-col space-y-2 lg:flex-row justify-center lg:justify-between w-full text-sm lg:text-xl">
                    <div className = "px-2">  
                        <input type = "text" value = {search} onChange = {(e) => {setSearch(e.target.value), searchCostumes(search);}} placeholder = "Search the costume catalogue..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
                    </div>  
                    <div className = "flex flex-row w-full text-sm lg:text-xl text-white space-x-2 justify-center">
                        <button onClick = {() => {setTools([]), setProps([]), loadCostumes();}} className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Costumes </button> {/*Filter to only costumes*/}
                        <button onClick = {() => {setTools([]), loadProps(), setCostumes([]);}}className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Props </button> {/*Filter to only props*/}
                        <button onClick = {() => {loadTools(), setProps([]), setCostumes([]);}}className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Tools </button> {/*Filter to only tools*/}
                        <button onClick = {() => loadCostumes()} className = "bg-[#323232] border-2 lg:border-4 border-[#d6de00] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#d6de00] [@media(hover:hover)]:hover:bg-[#d6de00]"> Remove filters </button> {/*display all*/}
                    </div>
                </div>
                <ul className = "flex flex-col items-center space-y-2 overflow-y-auto h-auto lg:h-190 w-full text-white rounded px-5 py-5">
                    {costumes.map((costume) => (<CostumeCard key = {costume.costumeId} costumeId = {costume.costumeId} name = {costume.name} group = {costume.group} category = {costume.group} colour = {costume.colour} size = {costume.size} quantity = {costume.quantity} locationCode = {costume.locationCode} lastUpdated = {costume.lastUpdated} inStock = {costume.inStock} cost = {costume.cost} imageURL = {costume.imageURL}/>))}
                    {props.map((prop) => (<PropCard key = {prop.propId} propId = {prop.propId} name = {prop.name} variant = {prop.variant} quantity = {prop.quantity} locationCode = {prop.locationCode} cost = {prop.cost} imageURL = {prop.imageURL} />))}
                    {tools.map((tool) => (<ToolCard key = {tool.toolId} toolId = {tool.toolId} name = {tool.name} quantity = {tool.quantity} location = {tool.location} condition = {tool.condition} assignedTo = {tool.assignedTo} ownedBy = {tool.ownedBy} category = {tool.category} imageURL = {tool.imageURL} />))}
                </ul>
            </div>
        </main>   
    );
}