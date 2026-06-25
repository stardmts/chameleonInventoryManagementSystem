"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
    
  const router = useRouter();

  return (
    <footer className = "flex flex-col bg-[#111111] text-white space-y-5">
      <div className = "h-[5px] bg-[linear-gradient(to_right,_#6DABE3_0%,_#6DABE3_11.11%,_#FF1100_11.11%,_#FF1100_22.22%,_#0E9729_22.22%,_#0E9729_33.33%,_#D6DE00_33.33%,_#D6DE00_44.44%,_#EC7705_44.44%,_#EC7705_55.55%,_#1CABA5_55.55%,_#1CABA5_66.66%,_#E87086_66.66%,_#E87086_77.77%,_#AD82CC_77.77%,_#AD82CC_88.88%,_#58206A_88.88%,_#58206A_100%)]"/>
      <div className = "flex flex-row justify-between px-5">
        <button onClick={() => router.push('/contactUs')} className = "text-2xl text-white font-bold hover:underline"> Contact us </button>
        <div className = "flex flex-row">
          <a href = "https://www.instagram.com/chameleoncostumehire?igsh=MXgyeDF1Y3puYmdhbg==" target="_blank" rel="noopener noreferrer" className = "group relative block h-15 w-15 rounded-xl overflow-hidden">  
            <img src = "/icons/social_icon_insta.svg" className = "h-15 w-15 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"/>
            <img src = "/icons/social_icon_insta_alt.svg" className = "h-15 w-15 absolute inset-0 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a href = "https://www.facebook.com/profile.php?id=100063476953756" target="_blank" rel="noopener noreferrer" className = "group relative block h-15 w-15 rounded-xl overflow-hidden">
            <img src = "/icons/social_icon_fb.svg" className = "h-15 w-15 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"/>
            <img src = "/icons/social_icon_fb_alt.svg" className = "h-15 w-15 absolute inset-0 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>
      </div>
      <p className = "text-[#808080]"> © 2009 - {new Date().getFullYear()} Starlight Dance & Musical Theatre School. </p>
    </footer>
  );
}