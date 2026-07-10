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
        <main className = "flex flex-row border-b-2 border-white rounded-xl bg-[#484848] items-center w-full px-2 py-2 space-x-5 text-wrap shadow-2xl">
            <img src = {imageURL} className = "h-20 w-20 lg:h-40 lg:w-40 rounded"/>
            <p className = "text-white text-sm lg:text-2xl w-full items-center">
                {propId} | {name} | {variant} | {quantity} | {locationCode}
            </p>
        </main>
    );
}