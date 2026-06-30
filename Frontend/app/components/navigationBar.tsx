"use client";

import { useRouter } from "next/navigation";

export default function NavBar() {

  const router = useRouter();

  return (
    <nav className = "flex flex-col w-full bg-[#111111]">
      <div className = "flex flex-row px-10 py-2 items-center justify-between">
        <div className = "flex flex-row space-x-2">
          <a href = "https://www.starlightdance.net" target="_blank" rel="noopener noreferrer">
            <img src = "/logos/STARLIGHT_LOGO.svg" className = "h-18" />
          </a>
          <a href = "https://www.starlightdance.net/chameleon" target="_blank" rel="noopener noreferrer">
            <img src = "/logos/CHAMELEON_LOGO.svg" className = "h-20" />
          </a>
        </div>
        <div className = "flex flex-row space-x-2">
          <a href = '/' className = "text-white text-1xl hover:underline"> Home </a>
          <a href = '/signIn' className = "text-white text-1xl hover:underline"> Sign in </a>
        </div>
      </div>
      <div className = "h-[5px] bg-[linear-gradient(to_right,_#6DABE3_0%,_#6DABE3_11.11%,_#FF1100_11.11%,_#FF1100_22.22%,_#0E9729_22.22%,_#0E9729_33.33%,_#D6DE00_33.33%,_#D6DE00_44.44%,_#EC7705_44.44%,_#EC7705_55.55%,_#1CABA5_55.55%,_#1CABA5_66.66%,_#E87086_66.66%,_#E87086_77.77%,_#AD82CC_77.77%,_#AD82CC_88.88%,_#58206A_88.88%,_#58206A_100%)]"/>
    </nav>
  );
}