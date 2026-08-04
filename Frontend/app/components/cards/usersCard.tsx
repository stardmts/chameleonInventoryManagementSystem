interface user {
    userId: string;
    userEmail:string;
    userFName: String;
    userSName: String;
    userRole: string;
}

import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function UserCard({userId, userEmail, userFName, userSName, userRole} : user) {

    const router = useRouter();

    const removeUser = (userToRemove: string) => {

    }

    const updatePermission = () => {
        if (userRole === "ADMIN") {
            {/*set user to USER*/}
        }
        {/*Else set user to ADMIN*/}
    }

    const updatePassword = () => {

    }

    const submitPassword = () => {

    }
    
    const [remove, setRemove] = useState(false);

    const [pass, setPass] = useState(false);

    const [admin, setAdmin] = useState(false);

    const [passMessage, setPassMessage] = useState('Passwords do not match');

    const [pass1, setPass1] = useState('');

    const [pass2, setPass2] = useState('');

    return (
        <main className = "flex flex-row border-b-2 border-white rounded-xl bg-[#484848] items-center w-full justify-between px-2 py-2 space-x-2 text-wrap shadow-2xl">
            { !remove && !admin && !pass && (
                    <> 
                        <p className = "text-white text-sm lg:text-2xl items-center">
                            {userId}
                        </p>
                        <div className = "flex flex-row space-x-2 lg:space-x-5 items-center">
                            <p className = "text-white text-sm lg:text-2xl items-center">
                                {userFName} {userSName} | {userEmail} | {userRole}
                            </p>
                            <div className = "flex flex-row space-x-1">
                                <button onClick = {() => {setRemove(!remove); removeUser(userId)}} className = "bg-[#484848] border-2 lg:border-4 border-[#ff1200] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Remove user </button>
                                <button onClick = {() => {setAdmin(!admin); updatePermission()}} className = "bg-[#484848] border-2 lg:border-4 border-[#ff1200] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Make user {userRole === "ADMIN" ? "User" : "Admin"} </button>
                                <button onClick = {() => {setPass(!pass); updatePassword()}} className = "bg-[#484848] border-2 lg:border-4 border-[#ff1200] p-2 text-white text-sm lg:text-xl rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> Reset password </button>
                            </div>
                        </div>
                    </>  
                )
            }
            { remove && (
                    <div className = "flex flex-col w-full">
                        <header className = "text-white"> Are you sure? </header>
                        <div className = "flex flex-row space-x-2">
                            <button onClick = {() => removeUser(userId)} className = "w-full bg-[#0e9729] p-1 w-full rounded-xl"> Yes </button>
                            <button onClick = {() => setRemove(!remove)} className = "w-full bg-[#ff1200] p-1 w-full rounded-xl"> No </button>
                        </div>
                    </div>
                )
            }
            { admin && (
                    <div className = "flex flex-col w-full">
                        <header className = "text-white"> Are you sure? </header>
                        <div className = "flex flex-row space-x-2">
                            <button onClick = {() => updatePermission()} className = "w-full bg-[#0e9729] p-1 w-full rounded-xl"> Yes </button>
                            <button onClick = {() => setAdmin(!admin)} className = "w-full bg-[#ff1200] p-1 w-full rounded-xl"> No </button>
                        </div>
                    </div>
                )
            }
            { pass && (
                    <div className = "flex flex-col w-full space-y-2">
                        <header className = "text-white"> Enter the new password? </header>
                        <div className = "flex flex-row space-x-2">
                            <input type = "text" value = {pass1} onChange = {(e) => setPass1(e.target.value)} placeholder = "Enter the password..." className = "bg-[#484848] w-full p-2 rounded-full border-2 border-white"/>
                            <input type = "text" value = {pass2} onChange = {(e) => setPass2(e.target.value)} placeholder = "Enter the pasword again..." className = "bg-[#484848] w-full p-2 rounded-full border-2 border-white"/>
                        </div>
                        { !(pass1 === pass2) && <span>{passMessage}</span> }
                        <button onClick = {() => submitPassword()} className = "bg-[#484848] w-full p-2 rounded-full border-2 border-white" > Sumbit </button>
                    </div>
                )
            }
        </main>
    );
}