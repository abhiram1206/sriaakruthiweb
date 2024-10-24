import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => 
    isActive 
      ? "border-b-4 border-red-500" 
      : "hover:border-b-4 hover:border-red-500";

  const menuItems = [
    { to: "/", text: "Home", exact: true },
    { to: "/aboutus", text: "About us" },
    { to: "/gallery", text: "Gallery" },
    { to: "/services", text: "Services" },
  ];

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row gap-10 p-10 text-white items-center">
        {menuItems.map(item => (
          <NavLink 
            key={item.to}
            to={item.to}
            className={navLinkStyles}
            end={item.exact}
          >
            {item.text}
          </NavLink>
        ))}
        <NavLink 
          to="/contactus" 
          className="bg-white/10 border-white/30 text-white rounded-xl hover:bg-white/50 p-2 border-2"
        >
          <p className="opacity-100">Contact us</p>
        </NavLink>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white p-2"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {menuItems.map(item => (
                <NavLink 
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `text-white text-2xl ${
                    isActive ? "border-b-4 border-red-500" : "hover:border-b-4 hover:border-red-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                  end={item.exact}
                >
                  {item.text}
                </NavLink>
              ))}
              <NavLink 
                to="/contactus" 
                className="bg-white/10 border-white/30 text-white text-2xl rounded-xl hover:bg-white/50 p-4 border-2"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;