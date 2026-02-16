import React from "react";
import '../index.css';

function Banner() {
    const socialLinks = [ 
        { id: 1, url: "https://x.com/?lang=ru", iconClass: "fi fi-brands-twitter-alt-circle" },
        { id: 2, url: "#", iconClass: "fi fi-brands-instagram" },
        { id: 3, url: "#", iconClass: "fi fi-brands-facebook" },
        { id: 4, url: "#", iconClass: "fi fi-brands-youtube" }
    ]

    return (
        <section className="banner-section relative flex flex-col items-center justify-center px-4 md:px-20 min-h-[600px] md:min-h-[850px]" id="Banner">
            
            <aside className="banner-left hidden md:flex absolute inset-y-55 left-5 flex-col items-center text-[#787878]">
                <p className="rotate-90 mb-10">Follow us</p>
                <p className="rotate-90">—</p>
                <div className="contancs gap-6 flex flex-col mt-4">
                    {socialLinks.map((link) => (
                        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link" title={link.name}>
                            <i className={`fi ${link.iconClass}`}></i>
                        </a>
                    ))}
                </div>
            </aside>

            <main className="mx-auto flex h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] md:h-[750px] md:w-[750px] items-center justify-center rounded-full bg-[#161616] p-4 md:p-10 shadow-lg shadow-black/30">

                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="banner-title flex items-center justify-center mt-[-10%] md:mt-[-20%]">

                        <h1 className="absolute top-[52%] z-20 text-[60px] sm:text-[100px] md:text-[150px] mt-[-10%] font-bold leading-none text-white select-none tracking-tight">
                            Surface
                        </h1>

                        {/* Изображение наушников: адаптивная ширина */}
                        <img
                            src="./Info-Hero.png"
                            alt="headphones"
                            className="relative z-10 w-[180px] sm:w-[300px] md:w-[400px] h-auto"
                        />

                        <h1 className="text-inner-shadow absolute bottom-[15%] z-0 text-[60px] sm:text-[100px] md:text-[150px] font-bold leading-none select-none tracking-tight">
                            Headphones
                        </h1>
                    </div>

                    {/* Цена */}
                    <div className="absolute bottom-4 md:bottom-0 z-30 text-white">
                        <p className="text-lg md:text-2xl font-bold tracking-widest">Price: 285$</p>
                    </div>
                </div>
            </main>

            <svg width="0" height="0" className="absolute">
                <filter id="inner-shadow">
                    <feOffset dx="0" dy="4" />
                    <feGaussianBlur stdDeviation="3" result="offset-blur" />
                    <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                    <feFlood floodColor="black" floodOpacity="0.7" result="color" />
                    <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                    <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
            </svg>

            {/* Правый блок: скрываем на мобилках (до lg), чтобы не было каши */}
            <aside className="banner-right hidden lg:flex absolute inset-y-55 right-0 flex-col items-center text-[#787878]">
                <p className="rotate-90 mb-45">Wireless</p>
                <p className="rotate-90">Beasts Studio 3</p>
            </aside>

            <button className="mt-10 md:absolute md:bottom-[-100px] lg:bottom-[-150px] bg-white text-black px-10 md:px-20 py-3 text-lg md:text-xl rounded-full font-bold hover:bg-gray-200 transition-colors z-40">
                Add to card
            </button>
        </section>
    );
}

export default Banner;