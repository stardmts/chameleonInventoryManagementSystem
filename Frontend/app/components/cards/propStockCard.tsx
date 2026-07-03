interface prop {
    propId: string;
    name: string;
    variant: string;
    quantity: number;
    locationCode: string;
    cost: string;
    imageURL: string;
    qrString: string;
}

export default function PropCard({propId, name, variant, quantity, locationCode, cost, imageURL} : prop) {

    return (
        <main className = "flex flex-row bg-[#484848] items-center w-full rounded px-2 py-2 space-x-5 text-wrap shadow-2xl">
            <a href = {'/${imageURL}'} className = "">
                <img src = {imageURL} className = "h-40 w-40 rounded"/>
            </a>
            <p className = "text-white text-2xl w-full items-center">
                {propId} | {name} | {variant} | {quantity} | {locationCode}
            </p>
        </main>
    );
}