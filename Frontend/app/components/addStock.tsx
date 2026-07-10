'use client';

import { useState } from 'react';
import AddCostume from './addCostume';
import AddProp from './addProp';
import AddTool from './addTool';
import StockPage from './stockPage';
import QrScanner from './qrScanner';


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
        <main className = "flex flex-col w-full min-h-screen items-center space-y-2 lg:space-y-5 py-2 lg:p-10">
            <header className = "hidden lg:block text-white text-sm lg:text-2xl">
                Choose the type of item your adding.
            </header>
            <div className = "hidden lg:block lg:flex-row lg:space-x-2 lg:text-xl lg:justify-center">
                <button onClick = {() => setDisplay('costume')} className = "w-full lg:w-auto bg-[#262626] border-2 lg:border-4 border-[#6dabe3] p-2 text-white rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Costumes </button> {/*Filter to only costumes*/}
                <button onClick = {() => setDisplay('prop')} className = "w-full lg:w-auto bg-[#262626] border-2 lg:border-4 border-[#ff1200] p-2 text-white rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Props </button> {/*Filter to only props*/}
                <button onClick = {() => setDisplay('tool')} className = "w-full lg:w-auto bg-[#262626] border-2 lg:border-4 border-[#e97187] p-2 text-white rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Tools </button> {/*Filter to only tools*/}
            </div>
            <div className = "flex flex-col space-y-1 block lg:hidden">
                <AddCostume />
                <AddProp />
                <AddTool />
            </div>
            {renderContent()}
        </main>
    );
}