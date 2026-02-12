import React from "react";

function Footer() {
  const socialLinks = [
    { id: 1, url: "https://x.com/?lang=ru", iconClass: "fi fi-brands-twitter-alt-circle" },
    { id: 2, url: "#", iconClass: "fi fi-brands-instagram" },
    { id: 3, url: "#", iconClass: "fi fi-brands-facebook" },
    { id: 4, url: "#", iconClass: "fi fi-brands-youtube" }
  ];

  return (
    <footer className="bg-[#1E1E1E] py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">

        {/* Логотип */}
        <div className="flex items-center gap-2">
          <img src="/Nav-logo-Headphonse.svg" alt="Beats Logo" className="w-6 h-6" />
          <span className="text-white font-bold text-xl tracking-tight">Apple beats</span>
        </div>

        {/* Навигация: на мобилке в 2 ряда или в ряд с переносом, на десктопе в один */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-[#787878] text-sm font-medium">
          <a href="#Banner" className="hover:text-white transition-colors">Home</a>
          <a href="#Info" className="hover:text-white transition-colors">Features</a>
          <a href="#Design" className="hover:text-white transition-colors">Design</a>
          <a href="#Accessories" className="hover:text-white transition-colors">Accessories</a>
          <a href="#Model" className="hover:text-white transition-colors">Model</a>
        </nav>

        {/* Соцсети */}
        <div className="flex gap-6 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:opacity-60 transition-opacity"
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#444] text-[12px] text-center md:text-left">
        <p>© Terms 2021 all right reserved</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#787878]">Terms of use</a>
          <a href="#" className="hover:text-[#787878]">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;