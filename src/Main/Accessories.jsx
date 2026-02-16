import React from "react";
import '../index.css';

function Accessories(){
    return(
       <section className="py-20 md:py-32 px-6 md:px-4 space-y-24 md:space-y-40 overflow-hidden" id="Accessories">
  
  {/* Заголовок секции */}
  <div className="text-center max-w-4xl mx-auto mb-16 md:mb-30">
    {/* БЭК: h2 и p тянуть из таблицы 'site_content' или 'sections' */}
    <h2 className="text-white text-4xl md:text-7xl font-bold mb-6">Headphone Accessories</h2>
    <p className="text-[#787878] text-base md:text-lg">
      Apple’s Beats is one of the more popular headphones makers in the world. 
      And the company’s Beats Studio 3. Apple's Beats.
    </p>
  </div>

  {/*картинка справа, а на мобилке будет картинка сверху */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20">
    <div className="relative w-full md:w-1/2 flex justify-center">
      <div className="absolute size-64 md:size-150 bg-white/5 blur-[80px] md:blur-[100px] rounded-full"></div>
      {/*бэк  из таблицы 'products' (id чехла) */}
      <img src="./bag.png" alt="Headphone Bag" className="relative z-10 w-64 md:w-80 object-contain" />
    </div>
    
    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
      <h3 className="text-white text-3xl md:text-4xl font-bold">Headphone Bags</h3>
      <p className="text-[#787878] text-base md:text-lg leading-relaxed">
        Apple’s Beats is one of the more popular headphones makers in the world. 
        And the company’s Beats Studio 3. Apple’s Beats is one of the more 
        popular headphones makers in the world.
      </p>
      <a href="#" className="inline-block text-white pb-1  hover:text-gray-400 hover:border-gray-400 transition-all text-lg md:text-xl">
        Learn more
      </a>
    </div>
  </div>

  {/* Charger: Картинка слева на десктопе */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
    <div className="relative w-full md:w-1/2 flex justify-center">
       <div className="absolute size-64 md:size-100 bg-white/10 blur-[80px] md:blur-[100px] rounded-full"></div>
       {/* TODO БЭК: image_url для зарядки */}
      <img src="./charger.png" alt="Charger" className="rotate-270 relative z-10 h-64 md:h-80 object-contain" />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
      <h3 className="text-white text-3xl md:text-4xl font-bold">Apple Beats Charger</h3>
      <p className="text-[#787878] text-base md:text-lg leading-relaxed">
        Apple’s Beats is one of the more popular headphones makers in the world. 
        And the company’s Beats Studio 3. Apple’s Beats is one of the more 
        popular headphones makers in the world.
      </p>
      <a href="#" className="inline-block text-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-all text-lg md:text-xl">
        Learn more
      </a>
    </div>
  </div>

  <div className="flex justify-center pt-10 md:pt-20">
        {/* TODO БЭК: addToCart(bundleID) или редирект на каталог */}
        <button className="bg-white text-black px-16 md:px-20 py-3 text-lg md:text-xl rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95">
            Add to card
        </button>
  </div>
</section>
    )
}
export default Accessories;