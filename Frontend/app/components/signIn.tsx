"use client";

import { useRouter } from "next/navigation";

export default function SignIn() {

  const router = useRouter();

  return (
    <main className = "flex flex-row bg-[#262626] h-185 w-full px-20 py-20 space-y-15 justify-around">
      <div className = "flex flex-col space-y-3 h-85 bg-[#323232] p-4 rounded-[10]">
        <header className = "text-white font-bold text-2xl">
            Sign in
        </header>
        <div className = "flex flex-col space-y-1 text-white text-1xl">
            <label htmlFor = "username-input"> E-mail address: </label>
            <input className = "bg-[#484848] rounded px-2 py-2 w-75 rounded border-b-2" placeholder = "Enter your e-mail..." />
        </div>
        <div className = "flex flex-col space-y-1 text-white text-1xl">
            <label htmlFor = "username-input"> Password: </label>
            <input className = "bg-[#484848] rounded px-2 py-2 w-75 rounded border-b-2" placeholder = "Enter your e-mail..." />
        </div>
        <button className = "bg-[#484848] px-4 w-20 py-0.5 rounded text-white"> Login </button>
        <div className = "flex flex-col space-y-1">
            <button onClick={() => router.push('/forgottenPassword')} className = "text-[#76b8ff] text-left w-85 hover:underline"> forgotten password? request password reset </button>
            <button onClick={() => router.push('/newUser')} className = "text-[#76b8ff]  text-left w-85 hover:underline"> New user? request access </button>
        </div>
      </div>
      <div className = "flex flex-col items-center space-y-15 bg-[#323232] p-4 rounded-[10]">
        <a href = "https://www.starlightdance.net/chameleon" target="_blank" rel="noopener noreferrer">
            <img src = "../logos/CHAMELEON_LOGO_COLOUR.svg" className = "w-250" />
        </a>
        <div className = "flex flex-row space-x-5">
            <button onClick={() => router.push('https://www.starlightdance.net/hire-category/costume-hire/')} className = "text-white text-2xl bg-[#6ab51c] rounded-[15] py-4 px-4 shadow-2xl hover:bg-[#484848]"> View our catalogue </button>
            <button onClick={() => router.push('/contactUs')} className = "text-white text-2xl bg-[#6ab51c] rounded-[15] py-4 px-4 shadow-2xl hover:bg-[#484848]"> Contact us </button>
        </div>
      </div>
    </main>
  );
}