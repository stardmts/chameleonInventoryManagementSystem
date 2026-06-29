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
    inStock: string;
    cost: string;
}

export default function costumeCard({costumeId, name, group, category, colour, size, quantity, locationCode, lastUpdated, notes, inStock, cost} : costume) {

    return (
        <main className = "flex flex-row bg-[#323232] items-center space-x-5 w-400 justify-between rounded px-10">

            <img src = "./logos/STARLIGHT_LOGO.svg" className = "h-25"/>

            <p className = "text-white text-1xl">
                {costumeId} | {name} | {colour} | {size} | {quantity} | {category}
            </p>

        </main>
    );
}