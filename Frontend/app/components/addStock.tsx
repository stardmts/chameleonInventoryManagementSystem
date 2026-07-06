'use client';

import { useState } from 'react';
import Select from 'react-select';
import AddCostume from './addCostume';
import AddProp from './addProp';
import AddTool from './addTool';


export default function AddStock() {
    
    const [display, setDisplay ] = useState('');

      const renderContent = () => {
        switch (display) {
            case 'costume':
            return <AddCostume />;
            case 'prop':
            return <AddProp />;
            case 'tool':
            return <AddTool />;
            default:
            return null;
            }
        };

    return (
        <main className = "flex flex-col w-full h-full items-center space-y-5 p-10">
            <header className = "text-white text-2xl">
                Choose the type of item your adding.
            </header>
            <div className = "flex flex-row space-x-2">
                <button onClick = {() => setDisplay('costume')} className = "bg-[#323232] border-4 border-[#6dabe3] p-2 text-white rounded-full hover:bg-[#6dabe3]"> Costumes </button> {/*Filter to only costumes*/}
                <button onClick = {() => setDisplay('prop')} className = "bg-[#323232] border-4 border-[#ff1200] p-2 text-white rounded-full hover:bg-[#ff1200]"> Props </button> {/*Filter to only props*/}
                <button onClick = {() => setDisplay('tool')} className = "bg-[#323232] border-4 border-[#e97187] p-2 text-white rounded-full hover:bg-[#e97187]"> Tools </button> {/*Filter to only tools*/}
            </div>
            {renderContent()}
        </main>
    );
}