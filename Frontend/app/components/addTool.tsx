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
        <main className = "flex flex-col p-5 rounded-xl">
            <div className = "flex flex-col bg-[#323232] px-10 py-5 rounded-xl w-full lg:w-auto space-y-2 text-white text-left border-4 border-[#e97187]">
                <header className = "lg:hidden text-xl text-white"> Add Tool/Tech: </header>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the tool/tech 's id </header>
                    <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Enter the tool/tech 's name </header>
                    <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">    
                    <header className = "text-white text-sm lg:text-xl"> Enter the tool/tech 's quantity </header>
                    <input type = "number" min = "1" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} placeholder = "Enter the quantity..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the tool/tech 's location </header>
                    <input type = "text" value = {location} onChange = {(e) => setLocation(e.target.value)} placeholder = "Enter the locationCode..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the tool/tech 's condition </header>
                    <input type = "text" value = {condition} onChange = {(e) => setCondition(e.target.value)} placeholder = "Enter the locationCode..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter who the tool/tech is assignedTo </header>
                    <input type = "text" value = {assignedTo} onChange = {(e) => setAssignedTo(e.target.value)} placeholder = "Type notes here..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Enter who owns the tool/tech </header>
                    <input type = "text" value = {ownedBy} onChange = {(e) => setOwnedBy(e.target.value)} placeholder = "Enter the cost per unit..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Choose the category </header>
                    <input type = "text" value = {category} onChange = {(e) => setCategory(e.target.value)} placeholder = "Enter tool or tech..." className = "text-white text-left bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">   
                    <button className = "text-white p-2 bg-[#484848] rounded-full touch-manipulation active:bg-[#323232] [@media(hover:hover)]:hover:hover:bg-[#262626] shadow-2xl"> Submit </button>
                </div>        
            </div>
        </main>
    );
}