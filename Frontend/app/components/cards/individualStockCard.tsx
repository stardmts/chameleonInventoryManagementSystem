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

export default function IndividualStockCard({costumeId, name, group, category, colour, size, quantity, locationCode, lastUpdated, inStock, cost, imageUrl
} : costume) {

    return (
        <main className = "flex flex-col space-y-2 lg:flex-row bg-[#323232] w-full lg:items-center rounded p-5 border-2 border-white rounded-xl">           
            <div className = "flex flex-row space-x-5 w-full lg:items-center lg:justify-center">              
                <img src = {imageUrl} className = "h-50 w-38 lg:h-100 lg:w-75 rounded-xl"/>
                <div>
                    <p className = "text-white text-sm lg:text-xl">
                        ID: {costumeId}
                        <br />
                        Name: {name}
                        <br />
                        Group: {group}
                        <br />
                        Colour: {colour}
                        <br />
                        Size: {size}
                        <br />
                        Category: {category}
                        <br />
                        Quantity: {quantity}
                        <br />
                        In stock: {inStock}
                        <br />
                        Cost: £{cost}
                        <br />
                        Last updated: {lastUpdated}
                        <br />
                        Location: {locationCode}
                    </p>
                </div>
            </div>
            <div className = "flex flex-col w-full text-white text-sm lg:text-2xl space-y-2">
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Pick stock. </button>
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Return stock. </button>
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Update stock information. </button>
                <button className = "bg-[#484848] rounded-xl shadow-2xl border-b-2 border-white w-full lg:h-15 lg:w-100"> Remove stock. </button>
            </div>     
        </main>
    );
}