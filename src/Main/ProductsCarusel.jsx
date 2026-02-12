import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const ProductsCarusel = ({ slides, onProductClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 1. Проверка на наличие данных (чтобы не упало)
  if (!slides || slides.length === 0) return null;

  // 2. Функции прокрутки (вернул стрелки на базу)
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 overflow-hidden" id="Model">
      <div className="text-center max-w-3xl mx-auto mb-10 px-6">
        <h2 className="text-white text-4xl md:text-7xl font-bold mb-6  uppercase">Beats Others Model</h2>
        <p className="text-[#787878] text-base md:text-lg">
          Apple’s Beats is one of the more popular headphones makers in the world.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto py-10 md:py-20">
        
        {/* КНОПКА НАЗАД (СЛЕВА) */}
        <button 
          onClick={scrollPrev} 
          className="absolute left-4 md:left-10 top-1/3 z-20 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* КНОПКА ВПЕРЕД (СПРАВА) */}
        <button 
          onClick={scrollNext} 
          className="absolute right-4 md:right-10 top-1/3 z-20 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <div className="cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex items-center">
            {slides.map((slide, index) => {
              const isActive = index === selectedIndex;
              return (
                <div key={slide.id || index} className="flex-[0_0_100%] md:flex-[0_0_40%] min-w-0 px-4">
                  <div className={`relative transition-all duration-700 flex flex-col items-center ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                    
                    <div className={`mb-10 text-white text-lg md:text-xl font-medium transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                      Model no- {slide.model}
                    </div>

                    <div className={`relative transition-transform duration-700 ease-in-out ${isActive ? 'scale-110 md:scale-125' : 'scale-75'}`}>
                      {isActive && <div className="absolute inset-0 bg-white/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />}
                      <img src={slide.src} className="w-full h-48 md:h-72 object-contain" alt={slide.model} />
                    </div>

                    <div className={`mt-10 md:mt-14 text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                      <div className="text-white text-4xl md:text-6xl font-black italic tracking-tighter">{slide.price}</div>
                      <div className="text-[#787878] text-[10px] uppercase tracking-[0.5em] mt-2">Apple Wireless Headphone</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ТОЧКИ */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-1 transition-all duration-500 rounded-full ${index === selectedIndex ? 'w-12 bg-white' : 'w-3 bg-white/10'}`}
            />
          ))}
        </div>

        {/* КНОПКА ADD TO CARD */}
        <div className="flex justify-center mt-20">
          <button 
            onClick={() => onProductClick(slides[selectedIndex])} 
            className="bg-white text-black px-16 py-4 text-xl rounded-full font-extrabold hover:bg-[#e5e5e5] transition-all active:scale-95 shadow-2xl"
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarusel;