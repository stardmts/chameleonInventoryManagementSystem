interface notice {
    noticeId: string;
    noticeBody: string;
    sender: string;
    noticeDate: string;
}

export default function NoticeCard({noticeId, noticeBody, sender, noticeDate}:notice) {
    return (
        <main className = "flex flex-row bg-[#323232] items-center space-x-5 w-400 justify-between rounded px-10 py-5 text-white text-2xl">
            <h2> Notice {noticeId}: </h2>
            <p> {noticeBody} </p>
            <p> {sender} </p>
            <p> {noticeDate} </p>
        </main>
    );
}