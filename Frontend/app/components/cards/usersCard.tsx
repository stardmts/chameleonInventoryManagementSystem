interface user {
    userId: String;
    userName: String;
    userRole: string;
}

import { useRouter } from "next/navigation";

export default function UserCard({userId, userName, userRole} : user) {

    const router = useRouter();

    return (
        <main className = "flex flex-row bg-[#484848] items-center w-full justify-between rounded px-2 py-2 space-x-5 text-wrap shadow-2xl">
            <p className = "text-white text-2xl items-center">
                {userId}
            </p>
            <div className = "flex flex-row space-x-5 items-center">
                <p className = "text-white text-2xl items-center">
                    {userName} | {userRole}
                </p>
                <button onClick = {() => router.push('/removeUser')} className = "bg-[#484848] border-4 border-[#ff1200] p-2 text-white rounded-full hover:bg-[#ff1200]"> Remove user</button>
            </div>
        </main>
    );
}