'use client';

import { useState } from 'react';

export default function AddTool() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(''); {/*up down thingy*/}
    const [location, setLocation] = useState('');
    const [condition, setCondition] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [ownedBy, setOwnedBy] = useState('');
    const [category, setCategory] = useState('');

    {/*image, qr are auto generated*/}

    return (
        <main className = "flex flex-col bg-[#323232] space-y-2 p-5 rounded-[15]">
            <header className = "text-white text-1xl"> Enter the tool/tech 's id </header>
            <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-[15] border-b-2 border-white"/>
            <header className = "text-white text-1xl"> Enter the tool/tech 's name </header>
            <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            <header className = "text-white text-1xl"> Enter the tool/tech 's quantity </header>
            
            <header className = "text-white text-1xl"> Enter the tool/tech 's location </header>
            <input type = "text" value = {location} onChange = {(e) => setLocation(e.target.value)} placeholder = "Enter the locationCode..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            <header className = "text-white text-1xl"> Enter the tool/tech 's condition </header>
            <input type = "text" value = {condition} onChange = {(e) => setCondition(e.target.value)} placeholder = "Enter the locationCode..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            <header className = "text-white text-1xl"> Enter who the tool/tech is assignedTo </header>
            <input type = "text" value = {assignedTo} onChange = {(e) => setAssignedTo(e.target.value)} placeholder = "Type notes here..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            <header className = "text-white text-1xl"> Enter who owns the tool/tech </header>
            <input type = "text" value = {ownedBy} onChange = {(e) => setOwnedBy(e.target.value)} placeholder = "Enter the cost per unit..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            <header className = "text-white text-1xl"> Choose the category </header>

        </main>
    );
}