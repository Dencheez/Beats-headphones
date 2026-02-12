import React from "react";
import '../index.css';

function ProductFeatures() {    

    return(
        <section className="py-20 px-4 text-center mt-20 md:mt-32" id="Design">
            
            {/* Заголовок и подзаголовок */}
            <div className="Infotext text-center space-y-6 px-4 mb-18"> 
                <h2 className="text-white text-4xl md:text-7xl font-bold tracking-tight">
                    Apple Beats Design
                </h2>
                <p className="text-[#787878] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Apple's Beats is one of the more popular headphones makers <br className="hidden md:block" />
                    in the world. And the company's Beats Studio 3.
                </p>
                <div className="pt-4">
                    {/* бэк Ссылка на категорию или галерею */}
                    <a href="#" className="text-white pb-1 hover:text-gray-400 transition-colors text-lg ">
                        Learn more;
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                
                {/* Card 1 */}
                {/* БЭК: Все карточки ниже — это идеальный кандидат под .map() */}
                <div className="bg-[#252525] rounded-[60px] aspect-square flex items-center justify-center p-12 hover:bg-[#2a2a2a] transition-colors group">
                    <img src="/Product1.png" alt="Beats side" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Card 2 */}
                <div className="bg-[#252525] rounded-[60px] aspect-square flex items-center justify-center p-12 hover:bg-[#2a2a2a] transition-colors group">
                    <img src="/Product2.png" alt="Beats front" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Card 3 */}
                <div className="bg-[#252525] rounded-[60px] aspect-square flex items-center justify-center p-12 hover:bg-[#2a2a2a] transition-colors group">
                    <img src="/Product3.png" alt="Beats angle" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>

            </div>
        </section>
    )
}

export default ProductFeatures;