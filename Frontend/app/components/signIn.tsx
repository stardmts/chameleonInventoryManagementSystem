"use client";

import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function SignIn() {

  const router = useRouter();

  const [forgotten, setForgotten] = useState(false);

  return (
    <main className = "flex flex-col lg:flex-row bg-[#262626] min-h-screen w-full px-5 lg:px-20 py-5 lg:py-20 space-y-5 lg:space-y-15 lg:space-x-20">
      { !forgotten && 
        (  
          <div className = "flex flex-col space-y-3 h-full bg-[#323232] p-4 rounded-[10]">
            <header className = "text-white font-bold text-2xl">
                Sign in
            </header>
            <div className = "flex flex-col space-y-1 text-white text-1xl">
                <label htmlFor = "username-input"> E-mail address: </label>
                <input className = "bg-[#484848] rounded px-2 py-2 rounded border-b-2" placeholder = "Enter your e-mail..." />
            </div>
            <div className = "flex flex-col space-y-1 text-white text-1xl">
                <label htmlFor = "username-input"> Password: </label>
                <input className = "bg-[#484848] rounded px-2 py-2 rounded border-b-2" placeholder = "Enter your e-mail..." />
            </div>
            <button onClick = {() => router.push('/staffLandingPage')} className = "bg-[#484848] px-4 w-20 py-0.5 rounded text-white"> Login </button> {/*devlopment use only delete when checkls are in place to verify user*/}
            <div className = "flex flex-col space-y-1">
                <button onClick = {() => setForgotten(!forgotten)} className = "text-[#76b8ff] text-left w-85 hover:underline"> forgotten password? request password reset </button>
            </div>
          </div>
        )
      }
      { forgotten && 
        (  
          <div className = "flex flex-col space-y-3 h-full bg-[#323232] p-4 rounded-[10]">
            <header className = "text-white font-bold text-2xl">
                Forgotten password
            </header>
            <div className = "flex flex-col space-y-1 text-white text-1xl">
                <label htmlFor = "username-input"> Enter your E-mail address: </label>
                <input className = "bg-[#484848] rounded px-2 py-2 rounded border-b-2" placeholder = "Enter your e-mail..." />
            </div>
            <button onClick = {() => setForgotten(!forgotten)} className = "bg-[#484848] px-4 w-20 py-0.5 rounded text-white"> Submit </button>
          </div>
        )
      }
      <div className = "flex flex-col justify-center items-center h-full bg-[#323232] space-y-5 p-4 lg:p-8 rounded-[10]">
        <a href = "https://www.starlightdance.net/chameleon" target="_blank" rel="noopener noreferrer">
            <img src = "../logos/CHAMELEON_LOGO.svg" className = "w-full lg:w-250 lg:h-auto" />
        </a>
        <div className = "flex flex-row space-x-5">
            <a href = "https://www.starlightdance.net/chameleon" className = "text-white text-sm lg:text-2xl bg-[#6ab51c] rounded-xl p-4 shadow-2xl hover:bg-[#484848]">
              View our catalogue
            </a>
            <a href = "/contactUs" className = "text-white text-sm lg:text-2xl bg-[#6ab51c] rounded-xl p-4 shadow-2xl hover:bg-[#484848]">
              Contact us
            </a>
        </div>
      </div>
    </main>
  );
}