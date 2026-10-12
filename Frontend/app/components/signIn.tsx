"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SignInDTO {
  userEmail: string,
  userPassword: string
}

export default function SignIn() {

  const router = useRouter();

  const [signInMessage, SetSignInMessage] = useState('');

  const [forgotten, setForgotten] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSignIn = async (email: string, password: string) => {

    console.log("Sending Payload:", { userEmail: email, userPassword: password });

    const signInDetails: SignInDTO = {
      userEmail: email,
      userPassword: password
    }

    try {

      const response = await fetch('http://localhost:8080/api/Auth/SignIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(signInDetails),
      })

      if (!response.ok) {
        SetSignInMessage("Failed to sign in")
      }

      if (response.ok) {
        router.refresh();
        router.push("/homePage")
      }
      
    } catch (err) {
      console.error("Login failed:", err)
    }

  }

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
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} className = "bg-[#484848] rounded px-2 py-2 rounded border-b-2" placeholder = "Enter your e-mail..." />
            </div>
            <div className = "flex flex-col space-y-1 text-white text-1xl">
                <label htmlFor = "username-input"> Password: </label>
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "bg-[#484848] rounded px-2 py-2 rounded border-b-2" placeholder = "Enter your password" />
            </div>
            <button onClick = {() => handleSignIn(email, password)} className = "bg-[#484848] px-4 w-20 py-0.5 rounded text-white"> Login </button> {/*devlopment use only delete when checkls are in place to verify user*/}
            <div className = "text-white text-left">
              {signInMessage}
            </div>
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