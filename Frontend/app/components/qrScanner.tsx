import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import TransactionPage from './transactionPage';
import StockPage from './stockPage';
import UsersPage from './usersPage';
import { useState } from 'react';
import IndividualCard from './cards/individualCard';

export default function QrScanner() {

    const [id, setId] = useState('');

    const handleScan = (result: IDetectedBarcode[]) => {
        if (result.length > 0) {

            setId(result[0].rawValue);

            setDisplay("Individual");
        }
    };

    const [display, setDisplay ] = useState('');

    const renderContent = () => {
        switch (display) {
            case 'QR code scanner':
            return <QrScanner />;
            case 'Transaction Log':
            return <TransactionPage />;
            case 'Stock':
            return <StockPage />;
            case 'Users':
            return <UsersPage />;
            case 'Account':
            return ;
            case 'Individual':
            return (
                <main className = "flex flex-col w-full min-h-screen items-center py-5 space-y-5">
                    <button className = "text-white"> Scan again </button>
                    {/*individual card goes here*/}
                </main>
            ); {/* get information from the Id set and create and display the individual card */}
            default:
            return (
                <main className = "flex flex-col w-full min-h-screen items-center p-5 space-y-5">
                    <header className = "text-white text-2xl"> Scan a QR code: </header>
                    <div className = "flex flex-col bg-[#323232] rounded-[30] w-[500] h-[500] shadow-2xl border-b-4 border-white">
                        <Scanner onScan = {handleScan} onError = {(err) => console.error(err)} allowMultiple = {false} scanDelay = {300} constraints={{facingMode: 'environment'}} formats = {['qr_code']} />
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