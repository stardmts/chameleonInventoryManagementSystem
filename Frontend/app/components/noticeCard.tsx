interface notice {
    noticeId: string;
    noticeBody: string;
    sender: string;
    noticeDate: string;
}

export default function NoticeCard({noticeId, noticeBody, sender, noticeDate}:notice) {
    return (
        <main className = "flex flex-row bg-[#484848] items-center w-171 justify-between rounded px-10 py-5 text-white text-1xl">
            <h2> Notice {noticeId}: </h2>
            <p> {noticeBody}, </p>
            <p> {noticeDate} </p>
        </main>
    );
}