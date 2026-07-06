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
        <main className = "flex flex-col bg-[#323232] space-y-2 p-5 rounded-[15]">
            <div className = "flex flex-col space-y-2">
                <header className = "text-white text-1xl"> Enter the prop's id </header>
                <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-[15] border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the prop's name </header>
                <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the prop's variant </header>
                <input type = "text" value = {variant} onChange = {(e) => setVariant(e.target.value)} placeholder = "Enter the locationCode..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the prop's quantity </header>
                <input type = "number" min = "1" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} placeholder = "Enter the quantity..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the prop's location </header>
                <input type = "text" value = {location} onChange = {(e) => setLocation(e.target.value)} placeholder = "Enter the locationCode..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the unit cost </header>
                <input type = "text" value = {cost} onChange = {(e) => setCost(e.target.value)} placeholder = "Type notes here..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            </div>
            <button className = "text-white p-2 bg-[#484848] rounded-full hover:bg-[#262626] shadow-2xl"> Submit </button>
        </main>
    );
}