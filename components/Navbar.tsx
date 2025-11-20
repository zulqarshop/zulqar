import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Laptop, ShoppingBag, User as UserIcon, LogOut, LayoutDashboard } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Shop Context
  const { cartCount, toggleCart, user, logout } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/store' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setUserMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-slate-900/90 backdrop-blur-md text-white py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className={`flex items-center gap-2 font-bold text-xl tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          <Laptop className="w-6 h-6 text-primary" />
          <span>ZULQAR<span className="text-primary">COMPUTERS</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary font-bold' 
                  : (scrolled ? 'text-slate-700' : 'text-slate-300')
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="h-6 w-px bg-slate-200 mx-2 opacity-30"></div>

          {/* Cart Icon */}
          <button 
            onClick={toggleCart}
            className={`relative p-2 rounded-full hover:bg-primary/10 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Auth */}
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={`flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-full transition-all ${scrolled ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
              >
                 <span>Hi, {user.name.split(' ')[0]}</span>
                 <UserIcon className="w-4 h-4" />
              </button>

              {/* Dropdown */}
              {userMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setUserMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-20 py-2 animate-fade-in-up">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs text-slate-500">Signed in as</p>
                      <p className="text-sm font-bold text-slate-900 truncate">{user.email}</p>
                    </div>
                    <Link 
                      to="/profile" 
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4" /> My Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link to="/auth">
              <button className={`p-2 rounded-full hover:bg-primary/10 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                <UserIcon className="w-5 h-5" />
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={toggleCart}
            className={`relative p-1 ${scrolled ? 'text-slate-900' : 'text-white'}`}
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl h-screen overflow-y-auto pb-20">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name} 
                to={link.path}
                onClick={handleNavClick}
                className={`font-medium text-lg py-2 border-b border-slate-100 hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-800'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
               <div className="mt-4 border-t border-slate-100 pt-4">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                     {user.name.charAt(0)}
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">{user.name}</p>
                     <p className="text-xs text-slate-500">{user.email}</p>
                   </div>
                 </div>
                 <Link 
                   to="/profile"
                   onClick={handleNavClick}
                   className="flex items-center gap-2 text-slate-700 font-medium py-2"
                 >
                   <LayoutDashboard className="w-5 h-5" /> My Dashboard
                 </Link>
                 <button 
                   onClick={() => { handleLogout(); handleNavClick(); }}
                   className="flex items-center gap-2 text-red-500 font-medium py-2 mt-2 w-full text-left"
                 >
                   <LogOut className="w-5 h-5" /> Logout
                 </button>
               </div>
            ) : (
               <Link to="/auth" onClick={handleNavClick} className="mt-4">
                 <button className="w-full bg-primary text-white py-3 rounded-xl font-bold">
                   Login / Register
                 </button>
               </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};