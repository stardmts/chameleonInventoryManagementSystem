interface notice {
    deadlineId: string;
    deadlineBody: string;
    show: string;
    deadline: string;
}

export default function DeadlineCard({deadlineId, deadlineBody, show, deadline}:notice) {
    return (
        <main className = "flex flex-col lg:flex-row border-b-2 border-white rounded-[15] bg-[#484848] items-center lg:justify-between w-full lg:w-171 lg:px-5 py-1 lg:py-5 text-white text-sm lg:text-xl shadow-2xl">
            <div className = "flex flex-col space-y-2 lg:flex-row lg:space-x-2">
                <h2> Deadline {deadlineId}: {deadline} </h2>
                <p> {deadlineBody} for {show} </p>
            </div>
        </main>
    );
}