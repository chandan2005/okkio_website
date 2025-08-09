import { FaUser, FaShoppingCart, FaHeart, FaSearch, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-primary-background shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Left side: Logo and Hamburger */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <Link to="/">
          <img src="/logo-removebg-preview.png" alt="Okkio Logo" className="h-12" />
        </Link>
        <FaBars className="text-xl cursor-pointer block md:hidden text-dark-text hover:text-candy-red" onClick={toggleSidebar} />
      </div>

      {/* Middle: Navigation Links (visible on md and up) */}
      <div className="hidden md:flex gap-6 text-dark-text font-medium">
        <Link to="/" className="no-underline text-dark-text hover:text-candy-red">Home</Link>
        <Link to="/category/men" className="no-underline text-dark-text hover:text-candy-red">Men</Link>
        <Link to="/category/women" className="no-underline text-dark-text hover:text-candy-red">Women</Link>
        <Link to="/category/kids" className="no-underline text-dark-text hover:text-candy-red">Kids</Link>
        <Link to="/category/okkio-selects" className="no-underline text-dark-text hover:text-candy-red">Okkio Selects</Link>
      </div>

      {/* Right side: Search and Icons */}
      <div className="flex items-center gap-4">
        {/* Search bar for larger screens */}
        <div className="hidden md:relative md:block">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm outline-none w-64 text-dark-text focus:border-gray-400"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        
        {/* Search icon for smaller screens */}
        <FaSearch 
          className="text-xl cursor-pointer block md:hidden text-dark-text hover:text-candy-red" 
          onClick={() => setIsSearchOpen(!isSearchOpen)} 
        />

        <FaHeart className="text-xl cursor-pointer text-dark-text hover:text-candy-red" />
        <Link to="/cart" className="no-underline text-inherit">
          <FaShoppingCart className="text-xl cursor-pointer text-dark-text hover:text-candy-red" />
        </Link>
        <Link to="/profile" className="no-underline text-inherit">
          <FaUser className="text-xl cursor-pointer text-dark-text hover:text-candy-red" />
        </Link>
      </div>

      {/* Search overlay for smaller screens */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-primary-background p-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm outline-none w-full text-dark-text focus:border-gray-400"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;