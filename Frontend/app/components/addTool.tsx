'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function AddTool() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(''); {/*up down thingy*/}
    const [location, setLocation] = useState('');
    const [condition, setCondition] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [ownedBy, setOwnedBy] = useState('');
    const [category, setCategory] = useState('');
    const qrRef = useRef(null);

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    {/*image, qr are auto generated*/}

    {/*
        QR CODE generation
        
        let qrBase64String = '';

        // 2. Extract the generated QR code canvas and convert it to a image string
        if (qrRef.current) {
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
            <div className = "flex flex-col bg-[#323232] px-10 py-5 rounded-xl w-full lg:w-auto space-y-2 text-white text-left border-4 border-[#e97187]">
                <header className = "lg:hidden text-xl text-white"> Add Tool/Tech: </header>
                <div ref={qrRef} style={{ display: 'none' }}>
                    {id && <QRCodeCanvas value={id} size={250} />}
                </div>
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
            </div>
        </main>
    );
}