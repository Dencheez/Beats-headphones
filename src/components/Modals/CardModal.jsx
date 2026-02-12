import React from 'react';

const CartModal = ({ isOpen, onClose, cartItems, onRemove }) => {
  if (!isOpen) return null;

  // Считаем общую сумму
  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    return sum + price;
  }, 0);

  return (
    <div className="fixed inset-0 z-[120] flex justify-end bg-black/60 backdrop-blur-md animate-fade">
      {/* Клик по фону закрывает корзину */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Боковая панель */}
      <div className="relative w-full max-w-md bg-[#161616] h-full shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col animate-slide-right border-l border-white/5">
        
        {/* Шапка корзины */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-white text-2xl font-bold italic uppercase">Your Cart</h2>
            <p className="text-[#444] text-xs uppercase tracking-widest mt-1">{cartItems.length} Items</p>
          </div>
          <button onClick={onClose} className="size-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-all">
            <i className="fi fi-rr-cross text-sm"></i>
          </button>
        </div>

        {/* Список товаров */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <i className="fi fi-rr-shopping-cart text-5xl text-[#222] mb-4"></i>
              <p className="text-[#444] uppercase tracking-widest text-sm">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-[#1e1e1e] p-4 rounded-[24px] border border-white/5 group">
                <div className="size-20 bg-[#252525] rounded-2xl flex items-center justify-center p-2">
                  <img src={item.src} alt={item.model} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg leading-tight">{item.model}</h4>
                  <p className="text-white font-bold mt-1">{item.price}</p>
                </div>
                <button 
                  onClick={() => onRemove(index)}
                  className="size-8 rounded-full flex items-center justify-center text-[#444] hover:text-red-500 hover:bg-red-500/10 transition-all"
                >
                  <i className="fi fi-rr-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Итого и кнопка заказа */}
        {cartItems.length > 0 && (
          <div className="p-8 bg-[#1a1a1a] border-t border-white/5">
            <div className="flex justify-between items-center mb-8">
              <span className="text-[#787878] uppercase text-xs tracking-[0.3em]">Estimated Total</span>
              <span className="text-white text-4xl font-black italic">${total}</span>
            </div>
            <button className="w-full bg-white text-black py-5 rounded-full font-black uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/5">
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;