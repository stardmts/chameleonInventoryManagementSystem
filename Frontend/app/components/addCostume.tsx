'use client';

import { useState } from 'react';

export default function AddCostume() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [category, setCategory] = useState(''); {/*drop down*/}
    const [colour, setColour] = useState(''); {/*drop down*/}
    const [size, setSize] = useState(''); {/*drop down*/}
    const [quantity, setQuantity] = useState('');
    const [locationCode, setLocationCode] = useState('');
    const [notes, setNotes] = useState('');
    const [cost, setCost] = useState('');

    {/*group is optional. image, inStock, lastUpdated are auto generated*/}

    return (
        <main className = "flex flex-col p-5 rounded-xl">
            <div className = "flex flex-col bg-[#323232] px-10 py-5 rounded-xl w-full lg:w-auto space-y-2 text-white text-left border-4 border-[#6dabe3]">
                <header className = "lg:hidden text-xl text-white"> Add Costume: </header>
                <div className = "flex flex-col space-y-0">
                    <header> Enter the costume id </header>
                    <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">   
                    <header> Enter the costume name </header>
                    <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header> Enter the costume group </header>
                    <input type = "text" value = {group} onChange = {(e) => setGroup(e.target.value)} placeholder = "Enter the costume group..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header> Enter the costume category </header>
                    <input type = "text" value = {category} onChange = {(e) => setCategory(e.target.value)} placeholder = "Enter the costume category..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                <div className = "flex flex-col space-y-0">          
                </div>
                    <header> Enter the costume colour </header>
                    <input type = "text" value = {colour} onChange = {(e) => setColour(e.target.value)} placeholder = "Enter the costume colour..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                <div className = "flex flex-col space-y-0">   
                </div>
                    <header> Enter the costume size </header>
                    <input type = "text" value = {size} onChange = {(e) => setSize(e.target.value)} placeholder = "Enter the costume size..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header> Enter the costume quantity </header>
                    <input type = "number" min = "1" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} placeholder = "Enter the quantity..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header> Enter the costume locationCode </header>
                    <input type = "text" value = {locationCode} onChange = {(e) => setLocationCode(e.target.value)} placeholder = "Enter the locationCode..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header> Enter the costume notes </header>
                    <input type = "text" value = {notes} onChange = {(e) => setNotes(e.target.value)} placeholder = "Type notes here..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header> Enter the costume cost </header>
                    <input type = "text" value = {cost} onChange = {(e) => setCost(e.target.value)} placeholder = "Enter the cost per unit..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>   
                <div className = "flex flex-col space-y-0">
                    <button className = "p-2 bg-[#484848] rounded-full touch-manipulation active:bg-[#323232] [@media(hover:hover)]:hover:bg-[#262626] shadow-2xl"> Submit </button>
                </div>
            </div>
        </main>
    );
}