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
}

export default function ToolCard({toolId, name, quantity, location, condition, assignedTo, ownedBy, category, imageURL} : tool) {

    return (
        <main className = "flex flex-row bg-[#484848] items-center w-full rounded px-2 py-2 space-x-5 text-wrap shadow-2xl">
            <a href = {'/${imageURL}'} className = "">
                <img src = {imageURL} className = "h-40 w-40 rounded"/>
            </a>
            <p className = "text-white text-2xl w-full items-center">
                {toolId} | {name} | {quantity} | Condition: {condition} | {location} | Assigned to: {assignedTo}
            </p>
        </main>
    );
}