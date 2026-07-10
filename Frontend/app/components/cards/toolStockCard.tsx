interface tool {
    toolId: string;
    name: string;
    quantity: number;
    location: string;
    condition: string;
    assignedTo: string;
    ownedBy: string;
    category: string;
    imageURL: string;
    qrString: string;
}

export default function ToolCard({toolId, name, quantity, location, condition, assignedTo, ownedBy, category, imageURL} : tool) {

    return (
        <main className = "flex flex-row border-b-2 border-white rounded-xl bg-[#484848] items-center w-full px-2 py-2 space-x-5 text-wrap shadow-2xl">
            <img src = {imageURL} className = "h-20 w-20 lg:h-40 lg:w-40 rounded"/>
            <p className = "text-white text-sm lg:text-2xl w-full items-center">
                {toolId} | {name} | {quantity} | Condition: {condition} | {location} | Assigned to: {assignedTo}
            </p>
        </main>
    );
}