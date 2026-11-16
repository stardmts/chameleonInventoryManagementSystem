"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SideBar() {

    const router = useRouter();

    const [open, setOpen] = useState(false);
    

    return (
        <div>
          <div className = "hidden lg:flex flex-col justify-between bg-[#111111] w-45 border-r-2 border-white h-full">
            <div className = "flex flex-col">
              <button onClick = {() => router.push('/homePage')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> DashBoard </button>
              <button onClick = {() => router.push('/qrScanner')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> QR code scanner </button>
              <button onClick = {() => router.push('/orders')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Orders </button>
              <button onClick = {() => router.push('/transactions')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Transaction Log </button>
              <button onClick = {() => router.push('/addStock')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Add stock </button>
              <button onClick = {() => router.push('/users')} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Users </button>
              <button onClick = {() => {router.push('/settings')}} className = "w-full h-10 py-1 border-b-2 border-white text-white hover:bg-[#bfbfbf]"> Settings </button>
            </div>
          </div>
          <div className = "flex flex-col items-center w-full lg:flex-row lg:justify-around">
            <div className = "lg:hidden bg-[#484848] w-full flex flex-row justify-between px-3 py-4 border-b-2 border-white">
              <button onClick = {() => router.push('/qrScanner')} className = "text-white py-1 px-2 rounded-full border-2 border-white shadow-2xl"> Scanner </button>
              <button onClick = {() => setOpen(!open)} className = "text-white"> 
                {!open && (
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    /> 
                  </svg> 
                  )
                }
              </button>
              {open && (
                <div className = "absolute right-3 flex flex-row space-x-2 bg-[#323232] p-4 rounded-xl w-auto border-2 border-white z-50">
                  <button onClick = {() => setOpen(!open)} className = "absolute left-1 top-1 text-white z-25"> 
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className = "flex flex-col">
                    <button onClick = {() => {router.push('/homePage')}} className = "text-white p-1"> DashBoard </button>
                    <button onClick = {() => {router.push('/qrScanner'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> QR Scanner </button>
                    <button onClick = {() => {router.push('/orders')}} className = "text-white p-1 border-t-2 border-[#484848]"> Orders </button>
                    <button onClick = {() => {router.push('/transactions'); setOpen(!open)}} className = "text-white p-1 border-t-2 border-[#484848]"> Transaction Log</button>
                    <button onClick = {() => {router.push('/addStock')}} className = "text-white p-1 border-t-2 border-[#484848]"> Add stock </button>
                    <button onClick = {() => {router.push('/users')}} className = "text-white p-1 border-t-2 border-[#484848]"> Users </button>
                    <button onClick = {() => {router.push('/settings')}} className = "text-white p-1 border-t-2 border-[#484848]"> Settings </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    )
}