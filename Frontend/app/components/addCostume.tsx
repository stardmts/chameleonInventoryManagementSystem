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

    const [selectedCategories, setSelectedCategories] = useState([]);

    const [selectedColours, setSelectedColours] = useState([]);

    const [selectedSize, setSelectedSize] = useState('');

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

    {/*imageURL comes from backend after cloudflare rerturns it*/}
    const imageUrl = "dzvvz";

    const costumeData: costume = {
        costumeId: id,
        name: name,
        group: group,
        category: selectedCategories,
        colour: selectedColours,
        size: selectedSize,
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
        groupCategory: selectedCategories,
        groupColour: selectedColours,
        groupSizes: [selectedSize]
    }

    const resetAllGroup = () => {
        setGroupId("")
        setGroupName("")
        setIsGroup(false);
    }

    const resetAllCostume = () => {
        setId("")
        setName("")
        setGroup("")
        setSelectedCategories([])
        setSelectedColours([])
        setSelectedSize('')
        setQuantity("")
        setLocationCode("")
        setCost("");
    }

    const colourOptions = [
        { value: 'GOLD', label: 'Gold' },
        { value: 'SILVER', label: 'Silver' },
        { value: 'BRONZE', label: 'Bronze' },
        { value: 'RED', label: 'Red' },
        { value: 'ORANGE', label: 'Orange' },
        { value: 'YELLOW', label: 'Yellow' },
        { value: 'GREEN', label: 'Green' },
        { value: 'BLUE', label: 'Blue' },
        { value: 'NAVY', label: 'Navy' },
        { value: 'TEAL', label: 'Teal' },
        { value: 'PINK', label: 'Pink' },
        { value: 'PURPLE', label: 'Purple' },
        { value: 'GREY', label: 'Grey' },
        { value: 'BROWN', label: 'Brown' },
        { value: 'WHITE', label: 'White' },
        { value: 'BLACK', label: 'Black' },
        { value: 'CREAM', label: 'Cream' },
        { value: 'MULTICOLOUR', label: 'Multicolour' }
    ];

    const handleCBColourChange = (colourValue) => {
        if (selectedColours.includes(colourValue)) {
        setSelectedColours(selectedColours.filter(c => c !== colourValue));
        } else {
        setSelectedColours([...selectedColours, colourValue]);
        }
    };

    const categoryOptions = [
        { value: 'BASICS', label: 'Basics' },
        { value: 'LYRICAL', label: 'Lyrical' },
        { value: 'CONTEMPORARY', label: 'Contemporary' },
        { value: 'JAZZ_AND_TAP', label: 'Jazz and Tap' },
        { value: 'BALLET', label: 'Ballet' },
        { value: 'TUTUS', label: 'Tutus' },
        { value: 'THEME_NOVELTY', label: 'Theme / Novelty' },
        { value: 'FILM_AND_MUSICALS', label: 'Film & Musicals' },
        { value: 'ACROBATICS', label: 'Acrobatics' },
        { value: 'COMMERCIAL', label: 'Commercial' },
        { value: 'ACCESSORIES', label: 'Accessories' },
        { value: 'HATS', label: 'Hats' },
        { value: 'FILM', label: 'Film' },
        { value: 'MUSICALS', label: 'Musicals' },
        { value: 'DRESSES', label: 'Dresses' },
        { value: 'LEOTARD', label: 'Leotards' },
    ];

    const handleCBCategoryChange = (categoryValue) => {
        if (selectedCategories.includes(categoryValue)) {
            setSelectedCategories(selectedCategories.filter(c => c !== categoryValue));
        } else {
            setSelectedCategories([...selectedCategories, categoryValue]);
        }
    };

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
                    <header className = "text-white text-sm lg:text-xl"> Choose the costume categories </header>
                    {categoryOptions.map((category) => (
                        <label key={category.value} className="flex items-center space-x-3 cursor-pointer p-1 hover:bg-[#585858] rounded">
                            <input type="checkbox" value={category.value} checked={selectedCategories.includes(category.value)} onChange={() => handleCBCategoryChange(category.value)} className="w-4 h-4 accent-white"/>
                            <span className="text-sm">{category.label}</span>
                        </label>
                    ))}
               </div>
                <div className = "flex flex-col space-y-0">          
                    <header className = "text-white text-sm lg:text-xl"> Choose the costume colours </header>
                    {colourOptions.map((colour) => (
                        <label key={colour.value} className="flex items-center space-x-3 cursor-pointer p-1 hover:bg-[#585858] rounded">
                            <input type="checkbox" value={colour.value} checked={selectedColours.includes(colour.value)} onChange={() => handleCBColourChange(colour.value)} className="w-4 h-4 accent-white"/>
                            <span className="text-sm">{colour.label}</span>
                        </label>
                    ))}
                </div>
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Choose the costume size </header>
                    <select value={selectedSize} onChange={(e) => (setSelectedSize(e.target.value))} className="bg-[#484848] border-b-2 border-white rounded-full text-left w-full p-1 lg:p-2.5">
                        <option value="XSC"> Extra Small Child </option>
                        <option value="SC"> Small Child </option>
                        <option value="MC"> Medium Child </option>
                        <option value="LC"> Large Child </option>
                        <option value="XLC"> Extra Large Child </option>
                        <option value="XXLC"> Extra Extra Large Child </option>
                        <option value="XSA"> Extra Small Adult </option>
                        <option value="SA"> Small Adult </option>
                        <option value="MA"> Medium Adult </option>
                        <option value="LA"> Large Adult </option>
                        <option value="XLA"> Extra Large Adult</option>
                        <option value="XXLA"> Extra Extra Large Adult </option>
                        <option value="THREE_TO_FOUR_YEARS"> 3-4 Years </option>
                        <option value="FIVE_TO_SIX_YEARS"> 5-6 Years </option>
                        <option value="SIX_TO_EIGHT_YEARS"> 6-8 Years </option>
                        <option value="SEVEN_TO_EIGHT_YEARS"> 7-8 Years </option>
                        <option value="NINE_TO_ELEVEN_YEARS"> 9-11 Years </option>
                        <option value="TWELVE_TO_THIRTEEN_YEARS"> 12-13 Years </option>
                        <option value="SIZE_128CMS"> 128cm </option>
                        <option value="SIZE_140CMS"> 140cm </option>
                        <option value="SIZE_150CMS"> 150cm </option>
                        <option value="SIZE_152CMS"> 152cm </option>
                        <option value="SIZE_160CMS"> 160cm </option>
                        <option value="SIZE_164CMS"> 164cm </option>
                        <option value="SIZE_0"> Size 0 </option>
                        <option value="SIZE_1"> Size 1 </option>
                        <option value="SIZE_2"> Size 2 </option>
                        <option value="SIZE_2A"> Size 2a </option>
                        <option value="SIZE_3A"> Size 3a </option>
                        <option value="SIZE_3"> Size 3 </option>
                        <option value="SIZE_4"> Size 4 </option>
                        <option value="SIZE_5"> Size 5 </option>
                        <option value="ONE_SIZE"> One Size </option>
                    </select> 
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
                {/*<QRCodeCanvas value = {costumeData?.costumeId}/> */}
            </div>
        </main>
    );
}