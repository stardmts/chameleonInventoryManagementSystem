"use client";

export default function ContactUs() {
    return (
        <main className = "flex flex-col bg-[#262626] h-185 px-20 py-20 space-y-40">
            <div className = "flex flex-row justify-around">
                <div className = "flex flex-col space-y-2">
                    <header className = "flex flex-row text-white font-bold text-2xl">
                        Telephone number
                    </header>
                    <p className = "flex flex-col text-white text-1xl">
                        Monday - Friday 11:00-17:00
                        <br />
                        Saturday 10:00 - 16:00
                        <br />
                        <a href = "tel:01536238535" className = "text-[#76b8ff] hover:underline"> 01536 238 535 </a>
                    </p>
                </div>
                <div className = "flex flex-col space-y-2">
                    <header className = "text-white font-bold text-2xl">
                        E-mail address
                    </header>
                    <a href = "mailto:admin@starlightdance.net" className = "text-[#76b8ff] hover:underline"> admin@starlightdance.net </a>
                </div>
                <div className = "flex flex-col space-y-2">
                    <header className = "text-white font-bold text-2xl">
                        Postal address
                    </header>
                    <p className = "flex flex-col text-white text-1xl">
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
            <div className = "flex flex-row justify-around">
                <div className = "flex flex-row space-x-10">
                    <img src = "../staffPhotos/nadine_davies.avif" alt = "nadine heashot" className = "border-5 border-[#b1322d] shadow-2xl rounded-[25]"/>
                    <div className = "flex flex-col space-y-2">
                        <div>
                            <header className = "text-white font-bold text-2xl">
                                Nadine davies
                            </header>
                            <header className = "text-white font-bold text-1.5xl">
                                Head of sales
                            </header>
                        </div> 
                        <p className = "flex flex-col text-white text-1xl">
                            <a href = "tel:01536238441" className = "text-[#76b8ff] hover:underline"> 01536 238 441 </a>
                            <a href = "mailto:Nadine.Davies@starlightdance.net" className = "text-[#76b8ff] hover:underline"> Nadine.Davies@starlightdance.net </a>
                        </p>
                    </div>
                </div>
                <div className = "flex flex-row space-x-10">
                    <img src = "../staffPhotos/heidi_agan.avif" alt = "heidi heashot" className = "border-5 border-[#4a97fc] shadow-2xl rounded-[25]"/>
                    <div className = "flex flex-col space-y-2">
                        <div>
                            <header className = "text-white font-bold text-2xl">
                                Heidi agan
                            </header>
                            <header className = "text-white font-bold text-1.5xl">
                                School administrator
                            </header>
                        </div>
                        <p className = "flex flex-col text-white text-1xl">
                            <a href = "tel:01536238522" className = "text-[#76b8ff] hover:underline"> 01536 238 522 </a>
                            <a href = "mailto:Heidi.Agan@starlightdance.net" className = "text-[#76b8ff] hover:underline"> Heidi.Agan@starlightdance.net </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}