import React, { useState } from 'react';
import Header from './header/Header.jsx';
import Banner from './Main/Banner.jsx';
import Info from './Main/Info.jsx';
import ProductFeatures from './Main/ProductFeatures.jsx';
import Accessories from './Main/Accessories.jsx';
import ProductsCarusel from './Main/ProductsCarusel.jsx';
import Footer from './Footer/Footer.jsx';
import AuthModal from './components/Modals/AuthModal';
import ProductModal from './components/Modals/ProductModal';
import CartModal from './components/Modals/CardModal.jsx';

function App() {
  // Состояния для модалок
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
const [isCartOpen, setIsCartOpen] = useState(false);

// Функция добавления в корзину
const addToCart = (product) => {
  setCart([...cart, product]); 
  setIsCartOpen(true);        
};

// удаление из корзины

const removeFromCart = (index) => {
  setCart(cart.filter((_, i) => i !== index));
};

  // App.jsx (пример массива слайдов) но у меня не получилось (потом)
const slides = [
  {
    id: 1,
    model: "Studio 3",
    price: "$349",
    src: "/Info-Hero.png", // Главное фото
    // Добавляем массив всех видов именно для ЭТОЙ модели
    views: [
      { id: 'v1', name: 'Main', src: '/CaruselHead-rightVIew.png' },
      { id: 'v2', name: 'Side', src: '/CaruselCard.png' },
      { id: 'v3', name: 'Box', src: '/CaruselHead-down.png' },
      { id: 'v4', name: 'Case', src: '/CaruselBag.png' },
    ]
  },
  {
    id: 2,
    model: "Solo Pro Red",
    price: "$299",
    src: "/carusel.png",
    views: [
      { id: 'v1', name: 'Main', src: '/CaruselHead-rightVIewRed.png' },
      { id: 'v2', name: 'Side', src: '/CaruselCard-Red.png' },
      { id: 'v3', name: 'Case', src: '/CaruselHead-downRed.png' },
      { id: 'v4', name: 'Box', src: '/CaruselBag-Red.png' }
    ]
  },
  {
    id: 3,
    model: "Solo Pro Stich",
    price: "$299",
    src: "/carusel1.png",
    views: [
      { id: 'v1', name: 'Main', src: '/carusel1.png' },
      { id: 'v2', name: 'Side', src: '/CaruselCard-Blue.png' },
      { id: 'v3', name: 'Box', src: '/CaruselBag.png' },
      // ... и так далее для всех 5 слайдов
    ]
  },
  {
    id: 4,
    model: "Solo Pro 02",
    price: "$299",
    src: "/carusel3.png",
    views: [
      { id: 'v1', name: 'Main', src: '/carusel3.png' },
      { id: 'v2', name: 'Side', src: '/CaruselCard-White.png' },
     { id: 'v3', name: 'Box', src: '/CaruselBag.png' }
      // ... и так далее для всех 5 слайдов
    ]
  },
  {
    id: 5,
    model: "Solo Pro Pink",
    price: "$299",
    src: "/carusel4.png",
    views: [
      { id: 'v1', name: 'Main', src: '/CaruselHead-rightVIewPink.png' },
      { id: 'v2', name: 'Side', src: '/CaruselCard-Pink.png' },
      { id: 'v3', name: 'Case', src: '/CaruselHead-downPimk.png' },
      { id: 'v4', name: 'Box', src: '/CaruselBag-Pink.png' },
    ]
  }
];

  return (
    <>
      {/* Передаем функцию открытия модалки в Header */}
      <Header 
      onAccountClick={() => setIsAuthOpen(true)} 
      onCartClick={() => setIsCartOpen(true)} 
      cartCount={cart.length}                 
    />
      
      <Banner />
      <Info />
      
      {/* В карусель можно передать функцию открытия карточки товара */}
      <ProductFeatures />
      <Accessories />
      <ProductsCarusel 
  slides={slides} 
  onProductClick={(product) => setSelectedProduct(product)} 
/>
      
      <Footer />

      {/* Модалки */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <ProductModal 
  isOpen={!!selectedProduct} 
  product={selectedProduct} 
  onClose={() => setSelectedProduct(null)} 
  onAddToCart={addToCart} 
/>
      <CartModal 
  isOpen={isCartOpen} 
  onClose={() => setIsCartOpen(false)} 
  cartItems={cart} 
  onRemove={removeFromCart} 
/>
    </>
  );
}

export default App;