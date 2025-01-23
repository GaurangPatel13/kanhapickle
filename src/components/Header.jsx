import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <>
      <header className="bg-electricBlue text-softWhite rounded-b-lg border-b-[1px] font-Helvatica border-charcoalGrey">
        <div className="container mx-auto flex justify-between items-center px-8 py-2">
          <img
            onClick={handleLogoClick}
            className="md:w-[120px] w-24 hover:cursor-pointer"
            src="/Assets/logo1.png"
            alt="Kanha Pickles"
          />
          <div className="md:hidden">
            <button onClick={toggleSidebar} aria-label="Toggle menu">
              {isSidebarOpen ? (
                <FaTimes className="text-softWhite" />
              ) : (
                <FaBars className="text-softWhite" />
              )}
            </button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-5">
              <li className="hover:text-goldenYellow">
                <Link to="/" onClick={closeSidebar}>
                  Home
                </Link>
              </li>
              <li className="hover:text-goldenYellow">
              <Link to="/products" onClick={closeSidebar}>
                Products
              </Link>
            </li>
              <li className="hover:text-goldenYellow">
                <Link to="/about" onClick={closeSidebar}>
                  About Us
                </Link>
              </li>
              <li className="hover:text-goldenYellow">
                <Link to="/contact" onClick={closeSidebar}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-charcoalGrey bg-opacity-50 backdrop-blur-sm transition-opacity duration-1000 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-opacity-50 backdrop-blur-sm transition-opacity duration-1000 bg-electricBlue text-softWhite transform transition-transform duration-1000 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0 animate-bounce-x" : "translate-x-full"
        } md:hidden`}
      >
        <button onClick={closeSidebar} aria-label="Close menu" className="p-5">
          <FaTimes className="text-softWhite" />
        </button>
        <nav>
          <ul className="flex flex-col space-y-5 p-5">
            <li className="hover:text-goldenYellow">
              <Link to="/" onClick={closeSidebar}>
                Home
              </Link>
            </li>
            <li className="hover:text-goldenYellow">
              <Link to="/products" onClick={closeSidebar}>
                Products
              </Link>
            </li>
            <li className="hover:text-goldenYellow">
              <Link to="/about" onClick={closeSidebar}>
                About Us
              </Link>
            </li>
            <li className="hover:text-goldenYellow">
              <Link to="/contact" onClick={closeSidebar}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
