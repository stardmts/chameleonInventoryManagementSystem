interface costume {
    costumeId: string;
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

export default function CostumeCard({costumeId, name, group, category, colour, size, quantity, locationCode, lastUpdated, notes, inStock, cost, imageURL
} : costume) {

    return (
        <main className = "flex flex-row border-b-2 border-white rounded-xl bg-[#484848] items-center w-full px-2 py-2 space-x-5 text-wrap shadow-2xl">
            <img src = {imageURL} className = "h-20 w-20 lg:h-40 lg:w-40 rounded"/>
            <p className = "text-white text-sm lg:text-2xl w-full items-center">
                {costumeId} | {name} | colour: {colour} | size: {size} | total quantity: {quantity} | currently in stock: {inStock} | category: {category}
            </p>
        </main>
    );
}