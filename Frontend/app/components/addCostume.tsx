'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

interface costume {
    costumeId: string;
    name: string;
    group: string;
    category: string[];
    colour: string[];
    size: string;
    quantity: number;
    inStock: number;
    locationCode: string;
    lastUpdated: string;
    cost: number;
    imageUrl: string;
}

interface group {
    groupId: string;
    groupName: string;
    groupQuantity: number;
    groupCategory: string[];
    groupColour: string[];
    groupSizes: string[];
}


export default function AddCostume() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [category, setCategory] = useState(''); {/*drop down*/}
    const [colour, setColour] = useState(''); {/*drop down*/}
    const [size, setSize] = useState(''); {/*drop down*/}
    const [quantity, setQuantity] = useState('');
    const [locationCode, setLocationCode] = useState('');
    const [cost, setCost] = useState('');
    const qrRefC = useRef(null);

    const [isGroup, setIsGroup] = useState(false);

    const [groupId, setGroupId] = useState('');
    const [groupName, setGroupName] = useState('');
    const qrRefG = useRef(null);

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    {/*
        QR CODE generation
        
        let qrBase64String = '';

        const activeRef = [qrRefC.current, qrRefG.current].find(Boolean);

        let qrBase64String = '';

        if (qrRefC.current) {
        const canvas = qrRefC.current.querySelector('canvas');
        if (canvas) {
            qrBase64String = canvas.toDataURL('image/png');
            // You now have the exact image string containing the costume ID!
        }
        }
    */}

    const postgresTimestamp = new Date().toISOString(); 

    {/*imageURL comes from backend after cloudflare rerturns it*/}
    const imageUrl = "dzvvz";

    const costumeData: costume = {
        costumeId: id,
        name: name,
        group: group,
        category: category ? category.split(",").map((cat) => cat.trim().toUpperCase()) : [],
        colour: colour ? colour.split(",").map((col) => col.trim().toUpperCase()) : [],
        size: size,
        quantity: Number(quantity),
        inStock: Number(quantity),
        locationCode: locationCode,
        lastUpdated: null,
        cost: Number(cost),
        imageUrl: imageUrl
    }

    const groupData: group = {
        groupId: groupId,
        groupName: groupName,
        groupQuantity: Number(quantity),
        groupCategory: category ? category.split(",").map((cat) => cat.trim().toUpperCase()) : [],
        groupColour: colour ? colour.split(",").map((col) => col.trim().toUpperCase()) : [],
        groupSizes: size ? size.split(",").map((col) => col.trim().toUpperCase()) : [],
    }

    const resetAllGroup = async () => {
        setGroupId("")
        setGroupName("")
        setIsGroup(false);
    }

    const resetAllCostume = async () => {
        setId("")
        setName("")
        setGroup("")
        setCategory("")
        setColour("")
        setSize("")
        setQuantity("")
        setLocationCode("")
        setCost("");
    }

    const createCostume = async (costumeData, groupData) => {
        if (!isGroup) {
            try {
                const response = await fetch('http://localhost:8080/api/Costumes/AddCostume', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(costumeData)
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                resetAllCostume();

            } catch (err) {
                console.error('Failed to create costume', err)
            }
        }
        else {
            try {
                const responseCostume = await fetch('http://localhost:8080/api/Costumes/AddCostume', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(costumeData)
                })

                if (!responseCostume.ok) {
                    throw new Error(`HTTP error! Status: ${responseCostume.status}`);
                }

                try {
                    const responseGroup = await fetch('http://localhost:8080/api/Groups/AddGroup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(groupData)
                    })

                    if (!responseGroup.ok) {
                        throw new Error(`HTTP error! Status: ${responseGroup.status}`);
                    }

                    resetAllCostume(),
                    resetAllGroup();

                } catch (err) {
                    console.error('Failed to create Group', err)
                }

            } catch (err) {
                console.error('Failed to create costume', err)
            }
        }   
    }

    return (
        <main className = "flex flex-col p-5 rounded-xl">
            <div className = "flex flex-col bg-[#323232] px-10 py-5 rounded-xl w-full lg:w-auto space-y-2 text-white text-left border-4 border-[#6dabe3]">
                <header className = "lg:hidden text-xl text-white"> Add Costume: </header>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume id </header>
                    <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume name </header>
                    <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costumes group id </header>
                    <input type = "text" value = {group} onChange = {(e) => setGroup(e.target.value)} placeholder = "Enter the costume group..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume categories </header>
                    <input type = "text" value = {category} onChange = {(e) => setCategory(e.target.value)} placeholder = "Enter the costume category..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">          
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume colour </header>
                    <input type = "text" value = {colour} onChange = {(e) => setColour(e.target.value)} placeholder = "Enter the costume colour..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume size </header>
                    <input type = "text" value = {size} onChange = {(e) => setSize(e.target.value)} placeholder = "Enter the costume size..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume quantity </header>
                    <input type = "number" min = "1" value = {quantity} onChange = {(e) => setQuantity(e.target.value)} placeholder = "Enter the quantity..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume locationCode </header>
                    <input type = "text" value = {locationCode} onChange = {(e) => setLocationCode(e.target.value)} placeholder = "Enter the locationCode..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>   
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume cost </header>
                    <input type = "text" value = {cost} onChange = {(e) => setCost(e.target.value)} placeholder = "Enter the cost per unit..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>
                <div className = "flex flex-col space-y-2">
                    <header className = "text-white text-sm lg:text-xl"> Upload the costume image </header>
                    <div className="flex flex-col sm:flex-row gap-3">
                    <input type="file" id="costume-image-upload" accept="image/*" className="hidden" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
                    <label htmlFor="costume-image-upload" className="cursor-pointer bg-[#484848] text-white text-center px-5 py-2 rounded-full border-b-2 border-white hover:bg-[#585858] text-sm lg:text-base inline-block" > {file ? 'Change Image' : 'Select Image'} </label>
                    <span className="text-xs lg:text-sm text-gray-400 max-w-[200px] truncate">
                        {file ? file.name : 'No file chosen'}
                    </span>
                </div>
                    <button onClick = {() => {}} disabled={loading} className = "bg-[#484848] text-sm p-2 rounded-full border-b-2 border-white">
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
                <div className = "flex flex-col space-y-2">
                    <header className = "text-white text-sm lg:text-xl"> Is this a new costume? </header>
                    <div className = "flex flex-row space-x-5">
                        <header className = "text-white text-sm lg:text-xl"> Yes / No </header>
                        <input type="checkbox" name="myCheckbox" onChange={(e) => setIsGroup(!isGroup)}/>
                    </div>
                </div>
                {isGroup && (
                    <div className = "flex flex-col w-full lg:w-auto space-y-4 text-white text-left">
                        <div className = "h-[2px] lg:h-[3px] bg-white" />
                        <div className = "flex flex-col w-full lg:w-auto space-y-2">
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Enter the group id </header>
                                <input type = "text" value = {groupId} onChange = {(e) => setGroupId(e.target.value)} placeholder = "Enter the group id..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Enter the group name </header>
                                <input type = "text" value = {groupName} onChange = {(e) => setGroupName(e.target.value)} placeholder = "Enter the group name..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                        </div>
                    </div>
                )}
                <div className = "flex flex-col space-y-0">
                    <button onClick = {() => {createCostume(costumeData, groupData);}} className = "p-2 bg-[#484848] rounded-full touch-manipulation active:bg-[#323232] [@media(hover:hover)]:hover:bg-[#262626] shadow-2xl"> Submit </button>
                </div>
            </div>
        </main>
    );
}