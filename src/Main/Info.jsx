import React from "react";
import '../index.css';

function Info() {
    return (
        <section className="info-section flex items-center flex-col px-6 md:px-20 mt-20 md:mt-100 mb-20 md:mb-50 relative" id="Info">
            
            <div className="Infotext text-center ladding-10 space-y-6 md:absolute">
                {/* Заголовок: адаптивный размер текста */}
                <h2 className="text-white text-4xl md:text-7xl font-bold">Apple Beats Features</h2>
                <p className="text-[#787878] text-lg md:text-xl">
                    Apple's Beats is one of the more popular headphones makers <br className="hidden md:block"/>
                    In the world. And the company's Beats Studio 3.
                </p>
            </div>

            <main className="hero-image relative mt-10 md:mt-70 ">
                
                <div className="relative flex h-full w-full items-center justify-center"> 
                    {/* Свечение: адаптивный размер */}
                    <div className="absolute size-[300px] md:size-[650px] rounded-full 
                        bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_0%,_transparent_70%)] 
                        blur-3xl pointer-events-none">
                    </div>

                    <div className="info-pointContainer absolute inset-0 z-20 hidden md:block">

                        {/* Feature Point 1 */}
                        <div className="group absolute bottom-30 left-5 cursor-pointer">
                            <div className="size-8 bg-white/20 rounded-full flex justify-center items-center transition-transform group-hover:scale-110">
                                <div className="bg-white size-4 rounded-full"></div>
                            </div> 
                            <div className="absolute right-full mr-5 bottom-2 -translate-y-1/2 w-55 
                                            opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                                            transition-all duration-300 pointer-events-non">
                                <div className="  text-white p-2 rounded  text-3xl">
                                    <p className="font-bold">Fast Fuel Port</p>
                                    <p className="text-[15px] text-gray-400">A place where magic turns 10 minutes of exercise into 3 hours of music.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Feature Point 2 */}
                        <div className="group absolute top-6 left-38 cursor-pointer">
                            <div className="size-8 bg-white/20 rounded-full flex justify-center items-center transition-transform group-hover:scale-110 ">
                                <div className="bg-white size-4 rounded-full"></div>
                            </div>
                            <div className="absolute left-full ml-5 top-5 -translate-y-1/2 w-120 
                                            opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                                            transition-all duration-300 pointer-events-none ">
                                <div className="  text-white p-2 rounded  text-3xl">
                                    <p className="font-bold">Ergonomic Headband</p>
                                    <p className="text-[15px] text-gray-400">The adjustable design features a soft silicone coating. <br /> It distributes the weight so the headphones don't put pressure <br /> on the top of your head during extended wear.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Point 3 */}
                        <div className="group absolute bottom-48 left-45 cursor-pointer">
                            <div className="size-8 bg-white/20 rounded-full flex justify-center items-center transition-transform group-hover:scale-110">
                                <div className="bg-white size-4 rounded-full"></div>
                            </div>
                            <div className="absolute right-full mr-10 bottom-2 -translate-y-1/2 w-90 
                                            opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                                            transition-all duration-300 pointer-events-none">
                                <div className="  text-white p-2 rounded  text-3xl">
                                    <p className="font-bold">Acoustic Memory Foam</p>
                                    <p className="text-[15px] text-gray-400">Memory foam ear pads provide passive sound <br />isolation and are breathable to keep your ears from sweating.
</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Point 4 */}
                        <div className="group absolute top-45 right-5 cursor-pointer">
                            <div className="size-8 bg-white/20 rounded-full flex justify-center items-center transition-transform group-hover:scale-110">
                                <div className="bg-white size-4 rounded-full"></div>
                            </div>
                            <div className="absolute left-full ml-12 top-0 -translate-y-1/2 w-90 
                                            opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                                            transition-all duration-300 pointer-events-none ">
                                <div className="  text-white p-2 rounded  text-3xl">
                                    <p className="font-bold">Steel Reinforcement</p>
                                    <p className="text-[15px] text-gray-400">A stainless steel adjustment mechanism ensures <br /> durability and a secure fit.
</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Point 5 */}
                        <div className="group absolute bottom-35 left-25 cursor-pointer">
                            <div className="size-8 bg-white/20 rounded-full flex justify-center items-center transition-transform group-hover:scale-110">
                                <div className="bg-white size-4 rounded-full"></div>
                            </div>
                            <div className="absolute right-full mr-5 top-0 -translate-y-1/2 w-55 
                                            opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                                            transition-all duration-300 pointer-events-none ">
                                <div className="  text-white p-2 rounded  text-3xl">
                                    <p className="font-bold">Bluetooth 4.2</p>
                                    <p className="text-[15px] text-gray-400">High quality sound</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Point 6 */}
                        <div className="group absolute bottom-23 right-18 cursor-pointer">
                            <div className="size-8 bg-white/20 rounded-full flex justify-center items-center transition-transform group-hover:scale-110">
                                <div className="bg-white size-4 rounded-full"></div>
                            </div>
                            <div className="absolute left-full ml-10 top-0 -translate-y-1/2 w-100 
                                            opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                                            transition-all duration-300 pointer-events-none ">
                                <div className="  text-white p-2 rounded text-3xl">
                                    <p className="font-bold ">Multi-function Control</p>
                                    <p className="text-[15px] text-gray-400">The main control unit. One pull to pause, two to advance. <br />The microphone for clear calls is also hidden here.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Картинка: адаптивный размер */}
                    <img src="./Info-Hero.png" alt="Headphones" className="object-contain w-[280px] md:w-[350px] z-10 drop-shadow-2xl" />
                </div>

            </main>

            
        </section>
    );
}

export default Info;