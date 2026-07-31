'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

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
    const [groupQuantity, setGroupQuantity] = useState('');
    const [groupCategory, setGroupCategory] = useState('');
    const [groupColour, setGroupColour] = useState('');
    const [groupSizes, setGroupSizes] = useState(''); //multi select drop down
    const qrRefG = useRef(null);

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    {/*group is optional. image, inStock, lastUpdated are auto generated*/}

    {/*
        QR CODE generation
        
        let qrBase64String = '';

        // 2. Extract the generated QR code canvas and convert it to a image string
        if (qrRefC.current) {
            const canvas = qrRef.current.querySelector('canvas');
            if (canvas) {
                qrBase64String = canvas.toDataURL('image/png');
            }
        }

        if (qrRefG.current) {
            const canvas = qrRef.current.querySelector('canvas');
            if (canvas) {
                qrBase64String = canvas.toDataURL('image/png');
            }
        }
    */}

    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);

        try {
            const response = await fetch('', { method: 'POST' }); {/*API needs to be created and inputted here*/}
            const { uploadUrl } = await response.json();

            const formData = new FormData();
            formData.append('file', file);

            const cfRes = await fetch(uploadUrl, {
                method: 'POST',
                body: formData,
            });

            const cfData = await cfRes.json();

            const imageId = cfData.result.id; //gets the image ID to store int the Database
            const imageUrl = cfData.result.variants[0]; 

            if (cfData.success) {
                console.log('Image hosted successfully at:', cfData.result.variants[0]);
                alert('Upload successful!');
            }
        } catch (err) {
            console.error('Upload failed:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className = "flex flex-col p-5 rounded-xl">
            <div className = "flex flex-col bg-[#323232] px-10 py-5 rounded-xl w-full lg:w-auto space-y-2 text-white text-left border-4 border-[#6dabe3]">
                <header className = "lg:hidden text-xl text-white"> Add Costume: </header>
                <div ref={qrRefC} style={{ display: 'none' }}>
                    {id && <QRCodeCanvas value={id} size={250} />}
                </div>
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume id </header>
                    <input type = "text" value = {id} onChange = {(e) => setId(e.target.value)} placeholder = "Enter the costume id..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">   
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume name </header>
                    <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "Enter the costume name..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume group </header>
                    <input type = "text" value = {group} onChange = {(e) => setGroup(e.target.value)} placeholder = "Enter the costume group..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                </div>    
                <div className = "flex flex-col space-y-0">
                    <header className = "text-white text-sm lg:text-xl"> Enter the costume category </header>
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
                    <button onClick={handleUpload} disabled={loading} className = "bg-[#484848] text-sm p-2 rounded-full border-b-2 border-white">
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
                            <div ref={qrRefG} style={{ display: 'none' }}>
                                {id && <QRCodeCanvas value={id} size={250} />}
                            </div>
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Enter the group id </header>
                                <input type = "text" value = {id} onChange = {(e) => setGroupId(e.target.value)} placeholder = "Enter the group id..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Enter the group name </header>
                                <input type = "text" value = {id} onChange = {(e) => setGroupName(e.target.value)} placeholder = "Enter the group name..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Enter the group quantity </header>
                                <input type = "text" value = {id} onChange = {(e) => setGroupQuantity(e.target.value)} placeholder = "Enter the group Quantity..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Enter the group category </header>
                                <input type = "text" value = {id} onChange = {(e) => setGroupCategory(e.target.value)} placeholder = "Enter the group category..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Enter the group id </header>
                                <input type = "text" value = {id} onChange = {(e) => setGroupColour(e.target.value)} placeholder = "Enter the group colour..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                            <div className = "flex flex-col space-y-0">
                                <header className = "text-white text-sm lg:text-xl"> Choose all sizes in the group </header>
                                <input type = "text" value = {id} onChange = {(e) => setGroupSizes(e.target.value)} placeholder = "Enter the group id..." className = "bg-[#484848] w-full p-2 rounded-full border-b-2 border-white"/>
                            </div>
                        </div>
                    </div>
                )}
                <div className = "flex flex-col space-y-0">
                    <button className = "p-2 bg-[#484848] rounded-full touch-manipulation active:bg-[#323232] [@media(hover:hover)]:hover:bg-[#262626] shadow-2xl"> Submit </button>
                </div>
            </div>
        </main>
    );
}