'use client';

import { useState } from 'react';

export default function AddTool() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [variant, setVariant] = useState('');
    const [quantity, setQuantity] = useState(''); {/*up down thingy*/}
    const [location, setLocation] = useState('');
    const [cost, setCost] = useState('');

    {/*image, qr are auto generated*/}

    return (
        <main className = "flex flex-col p-5 rounded-xl">
            <div className = "flex flex-col bg-[#323232] px-10 py-5 rounded-xl w-full lg:w-auto space-y-2 text-white text-left border-4 border-[#ff1200]">
                <header className = "lg:hidden text-xl text-white"> Add Prop: </header>
                <div className = "flex flex-col space-y-0">  
                    <header className = "text-white text-sm lg:text-xl"> Enter the prop's id </header>
                    <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the prop's name </header>
                    <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the prop's variant </header>
                    <input type = "text" value = {variant} onChange = {(e) => setVariant(e.target.value)} placeholder = "Enter the locationCode..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Enter the prop's quantity </header>
                    <input type = "number" min = "1" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} placeholder = "Enter the quantity..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Enter the prop's location </header>
                    <input type = "text" value = {location} onChange = {(e) => setLocation(e.target.value)} placeholder = "Enter the locationCode..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0"> 
                    <header className = "text-white text-sm lg:text-xl"> Enter the unit cost </header>
                    <input type = "text" value = {cost} onChange = {(e) => setCost(e.target.value)} placeholder = "Type notes here..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0"> 
                    <button className = "text-white p-2 bg-[#484848] rounded-full touch-manipulation active:bg-[#323232] [@media(hover:hover)]:hover:hover:bg-[#262626] shadow-2xl"> Submit </button>
                </div>   
            </div>
        </main>
    );
}