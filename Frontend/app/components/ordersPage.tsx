"use client";

import OrderCard from "./cards/orderCard";

import { useState, useEffect } from "react";

interface Order {
    orderId: string,
    userEmailAddress: string,
    startDate: string,
    endDate: string,
    status: string
}

export default function OrdersPage() {

    const [orders, setOrders] = useState<Order[]>([]);

    const loadOrders = async () => {
        try {
            fetch('http://localhost:8080/api/Orders', {credentials: 'include',})
            .then((data) => data.json())
            .then((data) => setOrders(data))
        } catch (err) {
            console.error("Fetch error", err)
        }
    };

    const search = async (search) => {
        try {
            
            if (search == "") {
                setOrders([]);
                loadOrders();
                return;
            }

            const response = await fetch(`http://localhost:8080/api/Orders/Search/${search}`, {credentials: 'include'})

            if(!response.ok) {
                throw new Error('Http error' + response.status)
            }

            const data = await response.json();
            setOrders(data);
            
        } catch (err) {
            console.error("Search error", err)
        }
    };
    
    useEffect(() => {
        loadOrders();
    }, [])
    
      return (
        <main className = "flex flex-col space-y-5 bg-[#323232] min-h-screen w-full items-center">
          <header className = "text-center bg-[#484848] w-full p-0.5 border-b-2 text-white text-sm lg:text-2xl border-white">
            All Orders:
          </header>
          <div className = "flex flex-row space-x-5 w-full px-5">  
            <input type = "text" onChange = {(e) => search(e.target.value)} placeholder = "Search the orders..." className = "text-white text-left bg-[#484848] w-full lg:w-100 p-2 rounded-full border-b-2 border-white"/>
            <button onClick = {() => {setOrders([]), loadOrders()}} className = "text-white bg-[#484848] border-2 border-white rounded-full p-1" > Clear Search </button>
          </div> 
          <div className = "hidden flex flex-row w-full text-sm lg:text-xl text-white space-x-2 justify-center">
            <button className = "bg-[#323232] border-2 lg:border-4 border-[#6dabe3] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#6dabe3] [@media(hover:hover)]:hover:bg-[#6dabe3]"> Completed </button> {/*Filter to only costumes*/}
            <button className = "bg-[#323232] border-2 lg:border-4 border-[#ff1200] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#ff1200] [@media(hover:hover)]:hover:bg-[#ff1200]"> In progress </button> {/*Filter to only props*/}
            <button className = "bg-[#323232] border-2 lg:border-4 border-[#e97187] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#e97187] [@media(hover:hover)]:hover:bg-[#e97187]"> Not started </button> {/*Filter to only tools*/}
            <button className = "bg-[#323232] border-2 lg:border-4 border-[#d6de00] p-1 lg:p-2 rounded-full transition-colors touch-manipulation active:bg-[#d6de00] [@media(hover:hover)]:hover:bg-[#d6de00]"> Remove filters </button> {/*display all*/}
          </div>
          <div className = "flex flex-col items-center space-y-2 overflow-y-auto h-auto lg:h-190 w-full text-white rounded px-5 py-5">
            {orders.map((order) => (<OrderCard key = {order.orderId} orderId = {order.orderId} userEmailAddress = {order.userEmailAddress} startDate = {order.startDate} endDate = {order.endDate} status = {order.status}/>))}
          </div>
        </main>
      );
    }