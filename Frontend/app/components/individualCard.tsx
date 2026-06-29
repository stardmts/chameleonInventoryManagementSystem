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
        <main className = "flex flex-col bg-[#323232] items-center w-200 space-y-5 rounded py-5">
            
            <div className = "flex flex-row justify-between p-5">
                
                <img src = "./icons/social_mail.svg" className = "h-100 w-75 bg-white"/>

                <div>
                    <p className = "text-white text-1xl">
                        {costumeId}
                        <br />
                        {name}
                        <br />
                        {colour}
                        <br />
                        {size}
                        <br />
                        {quantity}
                        <br />
                        {category}
                        <br />
                        {group}
                        <br />
                        {inStock}
                        <br />
                        {cost}
                        <br />
                        {lastUpdated}
                        <br />
                        {locationCode}
                        <br />
                        {notes}
                    </p>

                </div>

            </div>

            <div className = "flex flex-col space-y-2">
                <button className = "text-white text-2xl bg-[#6ab51c] rounded h-15 w-100"> Sign stock out. </button>
                <button className = "text-white text-2xl bg-[#6ab51c] rounded h-15 w-100"> Sign stock in. </button>
                <button className = "text-white text-2xl bg-[#6ab51c] rounded h-15 w-100"> Add/remove stock. </button>
                <button className = "text-white text-2xl bg-[#6ab51c] rounded h-15 w-100"> Update stock information. </button>
            </div>
            
        </main>
    );
}