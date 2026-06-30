"use client";

import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import AddCostume from './addCostume';
import AddProp from './addProp';
import AddTool from './addTool';
import Admin from './admin';

export default function AddStock() {

    const [selectedDisplay, setSelectedDisplay] = useState<SingleValue<itemType>>(null);

    const renderContent = () => {
    switch (selectedDisplay?.value) {
        case 'costume':
        return <AddCostume />;
        case 'prop':
        return <AddProp />;
        case 'tool':
        return <AddTool />;
        default:
        return (
            <main className = "flex flex-col bg-[#323232] items-center space-y-5 p-10">
      
                <header className = "text-white text-2xl">
                    Add new item:
                </header>
                
                <header className = "text-white text-1xl">
                    Choose the type of item your adding
                </header>

                <Select instanceId= "type-select" className="rounded w-75" onChange = {handleChange} options = {options} isSearchable={true} placeholder = "Choose an item type..."/>

            </main>
        );
        }
    };

    interface itemType {
        value: string;
        label: string;
    }

    const options: itemType[] = [
        { value: 'costume', label: 'Costume' },
        { value: 'prop', label: 'Prop' },
        { value: 'tool', label: 'Tool' }
    ];

    const handleChange = (newValue: SingleValue<itemType>) => {
        setSelectedDisplay(newValue);
    };

  return (
    renderContent()
  );
}