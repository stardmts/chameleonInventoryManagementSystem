import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import TransactionPage from './transactionPage';
import StockPage from './stockPage';
import UsersPage from './usersPage';
import { useState } from 'react';
import IndividualCard from './cards/individualCard';
import UserSettings from './userSettings';

interface Costume {
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

export default function QrScanner() {

    const [id, setId] = useState('');

    const [costume, setCostume] = useState<Costume[]>([]);

    const getCostume = async () => {
        try {
            fetch(`http://localhost:8080/api/Costumes/${id}`)
            .then((data) => data.json())
            .then((data) => setCostume(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };

    const handleScan = (result: IDetectedBarcode[]) => {
        if (result.length > 0) {

            setId(result[0].rawValue);

            getCostume();

            setDisplay("Individual");
        }
    };

    const [display, setDisplay ] = useState('');

    const renderContent = () => {
        switch (display) {
            case 'Transaction Log':
            return <TransactionPage />;
            case 'qrScanner':
            return <QrScanner />;
            case 'Stock':
            return <StockPage />;
            case 'Users':
            return <UsersPage />;
            case 'Account':
            return <UserSettings />;
            case 'Individual':
            return (
                <main className = "flex flex-col w-full min-h-screen items-center py-5 space-y-5">
                    {costume.map((costume) => (<IndividualCard key = {costume.costumeId} costumeId = {costume.costumeId} name = {costume.name} group = {costume.group} category = {costume.category} colour = {costume.colour} size = {costume.size} quantity = {costume.quantity} inStock = {costume.inStock} locationCode = {costume.locationCode} lastUpdated = {costume.lastUpdated} cost = {costume.cost} imageUrl = {costume.imageUrl}/>))}
                    <button onClick = {() => setDisplay('qrScanner')} className = "text-white p-2 bg-[#323232] border-b-2 border-[#FFFFFF] shadow-2xl rounded-[20px]"> Scan again </button>
                </main>
            );
            default:
            return (
                <main className = "flex flex-col w-full min-h-screen items-center p-5 space-y-5 z-15">
                    <header className = "text-white text-2xl"> Scan a QR code: </header>
                    <div className = "flex flex-col bg-[#484848] w-1/1 lg:w-[500] lg:h-[500] shadow-2xl">
                        <Scanner onScan = {handleScan} allowMultiple = {false} scanDelay = {300} constraints={{facingMode: 'environment'}} formats = {['qr_code']} />
                    </div>
                </main>
            );
        }
    };

    return (
        <>
            {renderContent()}
        </>
    );
}
{/*load item build individual card and and return it | when the qr code detects the item code it will return the itemId to get the information
use switch case to return either the scanner or the individual page    
*/}