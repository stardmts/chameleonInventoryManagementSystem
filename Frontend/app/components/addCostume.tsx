'use client';

import { useState } from 'react';

export default function AddCostume() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [category, setCategory] = useState(''); {/*drop down*/}
    const [colour, setColour] = useState(''); {/*drop down*/}
    const [size, setSize] = useState(''); {/*drop down*/}
    const [quantity, setQuantity] = useState(''); {/*up down thingy*/}
    const [locationCode, setLocationCode] = useState('');
    const [notes, setNotes] = useState('');
    const [cost, setCost] = useState('');

    {/*group is optional. image, inStock, lastUpdated are auto generated*/}

    return (
        <main className = "flex flex-col bg-[#323232] space-y-5 p-5 rounded-[15]">
            <div className = "flex flex-col space-y-2">
                <header className = "text-white text-1xl"> Enter the costume id </header>
                <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-[15] border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume name </header>
                <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume group </header>
                <input type = "text" value = {group} onChange = {(e) => setGroup(e.target.value)} placeholder = "Enter the costume group..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume category </header>
                <input type = "text" value = {category} onChange = {(e) => setCategory(e.target.value)} placeholder = "Enter the costume category..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume colour </header>
                <input type = "text" value = {colour} onChange = {(e) => setColour(e.target.value)} placeholder = "Enter the costume colour..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume size </header>
                <input type = "text" value = {size} onChange = {(e) => setSize(e.target.value)} placeholder = "Enter the costume size..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume quantity </header>
                <input type = "number" min = "1" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} placeholder = "Enter the quantity..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume locationCode </header>
                <input type = "text" value = {locationCode} onChange = {(e) => setLocationCode(e.target.value)} placeholder = "Enter the locationCode..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume notes </header>
                <input type = "text" value = {notes} onChange = {(e) => setNotes(e.target.value)} placeholder = "Type notes here..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
                <header className = "text-white text-1xl"> Enter the costume cost </header>
                <input type = "text" value = {cost} onChange = {(e) => setCost(e.target.value)} placeholder = "Enter the cost per unit..." className = "text-white text-left bg-[#484848] w-100 p-2 rounded-full border-b-2 border-white"/>
            </div>
            <button className = "text-white p-2 bg-[#484848] rounded-full hover:bg-[#262626] shadow-2xl"> Submit </button>
        </main>
    );
}