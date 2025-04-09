import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./images/Logo icon.png";

const Navbar = ({ setBookDemoPopupOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1180px] mx-auto px-6 py-2 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <h1 className="hidden md:block text-white font-medium text-2xl font-serif">Kaleidoscope</h1>
        </Link>

        {/* Nav Links + Button Wrapper */}
        <div className="hidden md:flex items-center justify-between w-full max-w-3xl">
          {/* Centered Nav Links */}
          <div className="flex-1 flex justify-center space-x-8 text-white font-normal">
            {[
              { name: "Home", path: "/" },
              { name: "About us", path: "/aboutUs" },
              { name: "Services", path: "/services" },
              { name: "Portfolios", path: "/Portfolios" },
              { name: "Contact Us", path: "/contact" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center justify-center h-10 transition-transform transform origin-center duration-300 ease-in-out ${
                  location.pathname === item.path ? "text-primary-red font-semibold" : "text-white"
                } hover:text-primary-red hover:scale-105`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Book a Demo Button */}
          <button
            onClick={() => setBookDemoPopupOpen(true)}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white"
          >
            Book A Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none hover:text-primary-red transition-all duration-300"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-md py-4 px-6 space-y-4 text-center">
          {[
            { name: "Home", path: "/" },
            { name: "About us", path: "/aboutus" },
            { name: "Services", path: "/services" },
            { name: "Portfolios", path: "/portfolios" },
            { name: "Contact Us", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex items-center justify-center h-10 transition-transform transform origin-center duration-300 ease-in-out ${
                location.pathname === item.path ? "text-primary-red font-semibold" : "text-white"
              } hover:text-primary-red hover:scale-105`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              setBookDemoPopupOpen(true);
            }}
            className="block bg-white text-black text-center w-full py-2 rounded-lg font-semibold hover:bg-black hover:text-white"
          >
            Book A Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
