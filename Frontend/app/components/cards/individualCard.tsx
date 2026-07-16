interface costume {
    costumeId: number;
    name: string;
    group: string;
    category: string;
    colour: string;
    size: string;
    quantity: number;
    locationCode: string;
    lastUpdated: string;
    notes: string;
    inStock: number;
    cost: string;
    imageURL: string;
    qrString: string;
}

export default function IndividualCard({costumeId, name, group, category, colour, size, quantity, locationCode, lastUpdated, notes, inStock, cost, imageURL
} : costume) {

    return (
        <main className = "flex flex-col bg-[#323232] w-full lg:w-200 space-y-5 rounded p-5 border-2 border-white rounded-xl">            
            <div className = "flex flex-row space-x-5 lg:items-center lg:justify-center">              
                <img src = {imageURL} className = "h-75 w-56.25 lg:h-100 lg:w-75 rounded-xl"/>
                <div>
                    <p className = "text-white text-sm lg:text-xl">
                        ID: {costumeId}
                        <br />
                        Name: {name}
                        <br />
                        Colour: {colour}
                        <br />
                        Size: {size}
                        <br />
                        Quantity: {quantity}
                        <br />
                        Category: {category}
                        <br />
                        Group: {group}
                        <br />
                        In stock: {inStock}
                        <br />
                        Cost: {cost}
                        <br />
                        Last updated: {lastUpdated}
                        <br />
                        Location: {locationCode}
                        <br />
                        Notes: {notes}
                    </p>
                </div>
            </div>
            <div className = "flex flex-col w-full text-white text-sm lg:text-2xl space-y-2">
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Sign stock out. </button>
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Sign stock in. </button>
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Remove stock. </button>
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Update stock information. </button>
            </div>     
        </main>
    );
}