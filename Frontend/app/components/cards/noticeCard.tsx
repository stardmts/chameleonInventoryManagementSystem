interface notice {
    noticeId: string;
    noticeBody: string;
    sender: string;
    noticeDate: string;
}

export default function NoticeCard({noticeId, noticeBody, sender, noticeDate}:notice) {
    return (
        <main className = "flex flex-col lg:flex-row border-b-2 border-white rounded-[15] bg-[#484848] items-center lg:justify-between w-full lg:w-171 px-1 lg:px-5 py-1 lg:py-5 text-white text-sm lg:text-xl shadow-2xl">
            <div className = "flex flex-col space-y-2 lg:flex-row lg:space-x-2">
                <h2> Notice {noticeId}: {noticeDate} </h2>
                <p> {noticeBody} </p>
            </div>
        </main>
    );
}