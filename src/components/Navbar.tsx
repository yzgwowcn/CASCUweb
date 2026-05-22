import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页 HOME', href: '#home', active: true },
    { name: '关于车协 ABOUT', href: '#culture', active: false },
    { name: '特色活动 ACTIVITIES', href: '#activities', active: false },
    { name: '招新加入 RECRUITMENT', href: '#recruitment', active: false },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-[#1A1A1A]/10 bg-[#F4F4F1]/90 backdrop-blur-sm ${
        isScrolled ? 'py-4 shadow-sm' : 'py-8'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img src="/logo.png" alt="CASCU Logo" className="h-10 w-auto object-contain" />
             <div className="flex flex-col">
               <span className="text-3xl font-black tracking-tighter text-[#1A1A1A] leading-none">CASCU</span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mt-1">EST. 2008</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-opacity ${link.active ? 'border-b-2 border-[#C00000] pb-1' : 'hover:opacity-50 pb-1'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="ml-4 px-6 py-3 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F4F4F1] transition-all whitespace-nowrap"
            >
              活动报名 SIGNUP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1A1A1A]"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F4F4F1] border-b border-[#1A1A1A]/10 py-6 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1A1A1A] text-xs font-bold uppercase tracking-widest w-full text-center hover:text-[#C00000]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[80%] text-center py-4 border border-[#1A1A1A] bg-[#1A1A1A] text-[#F4F4F1] text-xs font-bold uppercase tracking-widest"
          >
            活动报名 SIGNUP
          </a>
        </div>
      )}
    </nav>
  );
}
