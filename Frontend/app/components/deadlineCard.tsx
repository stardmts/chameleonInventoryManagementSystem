interface notice {
    deadlineId: string;
    deadlineBody: string;
    show: string;
    deadline: string;
}

export default function DeadlineCard({deadlineId, deadlineBody, show, deadline}:notice) {
    return (
        <main className = "flex flex-row bg-[#484848] items-center justify-between w-171 rounded px-5 py-5 text-white text-1xl shadow-2xl">
            <div className = "flex flex-row space-x-2">
                <h2> Deadline {deadlineId}: </h2>
                <p> {deadlineBody} for {show} </p>
            </div>
            <p> {deadline} </p>
        </main>
    );
}