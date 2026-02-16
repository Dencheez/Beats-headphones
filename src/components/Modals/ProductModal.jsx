import React, { useState, useEffect } from 'react';

const ProductModal = ({ isOpen, onClose, product, onAddToCart}) => {
  // Стейт для текущей картинки в большом окне
  const [activeImage, setActiveImage] = useState(null); // Заменили '' на null

  // Когда открываем модалку или меняем товар, ставим главную картинку товара
  useEffect(() => {
    if (product) {
      setActiveImage(product.src);
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

const accessories = [
  { id: 1, name: 'Main View', src: product.src },
  { id: 2, name: 'Side View', src: `${import.meta.env.BASE_URL}CaruselHead-rightVIew.png` }, 
  { id: 3, name: 'Card', src: `${import.meta.env.BASE_URL}CaruselCard.png` },
  { id: 4, name: 'Down View', src: `${import.meta.env.BASE_URL}CaruselHead-down.png` },
  { id: 5, name: 'Case', src: `${import.meta.env.BASE_URL}CaruselBag.png` }
];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md px-4 animate-fade">
      <div className="bg-[#1e1e1e] w-full max-w-6xl rounded-[40px] overflow-hidden flex flex-col md:flex-row relative border border-white/10 shadow-2xl">
        
        {/* Кнопка закрытия */}
        <button onClick={onClose} className="absolute top-8 right-8 z-50 text-white/30 hover:text-white transition-colors">
          <i className="fi fi-rr-cross text-2xl"></i>
        </button>

        {/* СЕКЦИЯ АКСЕССУАРОВ (ГАЛЕРЕЯ) */}
        <div className="hidden md:flex w-24 bg-[#1a1a1a] border-r border-white/5 flex-col items-center py-10 gap-6 animate-slide">
            <span className="text-[10px] text-[#787878] uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-4">
                View Details
            </span>
            {accessories.map((acc) => (
                <button 
                  key={acc.id} 
                  onClick={() => setActiveImage(acc.src)} // МЕНЯЕМ КАРТИНКУ ПРИ КЛИКЕ
                  className={`group relative p-1 rounded-2xl transition-all ${activeImage === acc.src ? 'bg-white/10 border-white/20' : 'border-transparent'}`}
                >
                    <div className="size-14 bg-[#252525] rounded-2xl border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all overflow-hidden">
                        <img 
                          src={acc.src} 
                          alt={acc.name} 
                          className={`size-10 object-contain transition-opacity ${activeImage === acc.src ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} 
                        />
                    </div>
                    <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase whitespace-nowrap z-50">
                        {acc.name}
                    </span>
                </button>
            ))}
        </div>

        {/* Центр: ТЕКУЩАЯ КАРТИНКА */}
        <div className="w-full md:flex-1 bg-[#252525] flex items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute size-80 bg-white/5 blur-[100px] rounded-full"></div>
          
          {/* Ключ key={activeImage} нужен для анимации смены (React перерисует компонент) */}
          
          <img 
            key={activeImage}
            src={activeImage} 
            alt="Active view" 
            className="relative z-10 w-full h-[300px] md:h-[450px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-500" 
          />
        </div>

        {/* Правая часть: Описание */}
        <div className="w-full md:w-[450px] p-8 md:p-12 flex flex-col justify-center bg-[#1e1e1e]">
          <span className="text-[#787878] uppercase tracking-[0.4em] text-[12px] mb-4">
            Apple Wireless Headphone
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6 italic leading-tight">
            Model {product.model}
          </h2>
          
          <div className="space-y-4 mb-10">
            <p className="text-[#787878] text-lg leading-relaxed">
              Experience the iconic sound of Beats with Pure Adaptive Noise Canceling and up to 22 hours of battery life.
            </p>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/5">
            <div className="flex flex-col">
                <span className="text-[#444] text-sm uppercase">Price</span>
                <span className="text-white text-5xl font-bold italic">{product.price}</span>
            </div>
            <button onClick={() => onAddToCart(product)} className="bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/5">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;