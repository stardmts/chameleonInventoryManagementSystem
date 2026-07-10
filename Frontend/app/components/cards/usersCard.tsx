interface user {
    userId: string;
    userEmail:string;
    userFName: String;
    userSName: String;
    userRole: string;
}

import { useRouter } from "next/navigation";

export default function UserCard({userId, userEmail, userFName, userSName, userRole} : user) {

    const router = useRouter();

    return (
        <main className = "flex flex-row border-b-2 border-white rounded-xl bg-[#484848] items-center w-full justify-between px-2 py-2 space-x-5 text-wrap shadow-2xl">
            <p className = "text-white text-sm lg:text-2xl items-center">
                {userId}
            </p>
            <div className = "flex flex-row space-x-2 lg:space-x-5 items-center">
                <p className = "text-white text-sm lg:text-2xl items-center">
                    {userFName} {userSName} | {userEmail} | {userRole}
                </p>
                <button onClick = {() => router.push('/removeUser')} className = "bg-[#484848] border-2 lg:border-4 border-[#ff1200] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Remove user </button>
            </div>
        </main>
    );
}