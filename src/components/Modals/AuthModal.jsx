import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Переключение Вход/Регистрация

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 animate-fade">
      <div className="bg-[#1e1e1e] w-full max-w-md rounded-[30px] p-8 md:p-12 relative border border-white/10">
        
        {/* Кнопка закрытия */}
        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
          <i className="fi fi-rr-cross text-xl"></i>
        </button>

        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-[#252525] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-all"
            />
          )}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-[#252525] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-all"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-[#252525] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-all"
          />
          
          <button className="w-full bg-white text-black font-bold py-3 rounded-xl mt-4 hover:bg-gray-200 transition-all active:scale-95">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#787878] text-sm hover:text-white transition-colors"
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;