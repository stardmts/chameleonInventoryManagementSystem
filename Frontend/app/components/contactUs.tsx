"use client";

export default function ContactUs() {
    return (
        <main className = "flex flex-col bg-[#262626] min-h-screen px-5 lg:px-20 py-2 lg:py-20 space-y-5 lg:space-y-40">
            <div className = "flex flex-col space-y-2 lg:flex-row justify-around">
                <div className = "flex flex-col">
                    <header className = "text-white font-bold lg:text-2xl">
                        Telephone number
                    </header>
                    <p className = "flex flex-col text-white">
                        Monday - Friday 11:00 - 17:00
                        <br />
                        Saturday 10:00 - 16:00
                        <br />
                        <a href = "tel:01536238535" className = "text-[#76b8ff] hover:underline"> 01536 238 535 </a>
                    </p>
                </div>
                <div className = "flex flex-col">
                    <header className = "text-white font-bold lg:text-2xl">
                        E-mail address
                    </header>
                    <a href = "mailto:admin@starlightdance.net" className = "text-[#76b8ff] hover:underline"> admin@starlightdance.net </a>
                </div>
                <div className = "flex flex-col">
                    <header className = "text-white font-bold lg:text-2xl">
                        Postal address
                    </header>
                    <p className = "flex flex-col text-white">
                        The Starlight Dance Group Ltd
                        <br />
                        Unit 1, 15 Orion Way,
                        <br />          
                        Kettering Business Park, NN15 6NH
                        <br />
                        <a href = "https://maps.app.goo.gl/wy7p4pr5JDvyB96q9" className = "text-[#76b8ff] hover:underline"> Find us </a>
                    </p>
                </div>
            </div>
            <div className = "flex flex-col lg:flex-row lg:justify-around">
                <div className = "flex flex-col py-1 lg:flex-row space-y-2 lg:space-x-10">
                    <img src = "../staffPhotos/nadine_davies.avif" alt = "nadine heashot" className = "h-full w-1/2 lg:h-full lg:w-full border-5 border-[#b1322d] shadow-2xl rounded-[25]"/>
                    <div className = "flex flex-col space-y-2">
                        <div className = "flex flex-col">
                            <header className = "text-white font-bold lg:text-2xl">
                                Nadine Davies
                            </header>
                            <header className = "text-white font-bold">
                                Head of sales
                            </header>
                        </div> 
                        <p className = "flex flex-col text-white">
                            <a href = "tel:01536238441" className = "text-[#76b8ff] hover:underline"> 01536 238 441 </a>
                            <a href = "mailto:Nadine.Davies@starlightdance.net" className = "text-[#76b8ff] hover:underline"> Nadine.Davies@starlightdance.net </a>
                        </p>
                    </div>
                </div>
                <div className = "flex flex-col py-1 lg:flex-row space-y-2 lg:space-x-10">
                    <img src = "../staffPhotos/heidi_agan.avif" alt = "heidi heashot" className = "h-full w-1/2 lg:h-full lg:w-full border-5 border-[#4a97fc] shadow-2xl rounded-[25]"/>
                    <div className = "flex flex-col space-y-2">
                        <div className = "flex flex-col">
                            <header className = "text-white font-bold lg:text-2xl">
                                Heidi Agan
                            </header>
                            <header className = "text-white font-bold">
                                School administrator
                            </header>
                        </div>
                        <p className = "flex flex-col text-white">
                            <a href = "tel:01536238522" className = "text-[#76b8ff] hover:underline"> 01536 238 522 </a>
                            <a href = "mailto:Heidi.Agan@starlightdance.net" className = "text-[#76b8ff] hover:underline"> Heidi.Agan@starlightdance.net </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}