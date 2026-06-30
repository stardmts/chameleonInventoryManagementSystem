interface notice {
    deadlineId: string;
    deadlineBody: string;
    show: string;
    deadline: string;
}

export default function DeadlineCard({deadlineId, deadlineBody, show, deadline}:notice) {
    return (
        <main className = "flex flex-row bg-[#484848] items-center w-171 justify-between rounded px-10 py-5 text-white text-1xl">
            <h2> Deadline {deadlineId}: </h2>
            <p> {deadlineBody}, </p>
            <p> {show}, </p>
            <p> {deadline} </p>
        </main>
    );
}