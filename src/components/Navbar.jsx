import { FaUser, FaShoppingCart, FaHeart, FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-10">
      <div className="flex items-center space-x-4">
        <FaBars className="md:hidden text-xl cursor-pointer" /> {/* Hamburger icon for mobile */}
        {/* Removed the logo image */}
        <div className="text-2xl font-bold">okkio.in</div> {/* Re-added text logo */}
      </div>
      <div className="space-x-6 hidden md:flex text-gray-700 font-medium">
        <a href="#" className="hover:text-gray-900">Men</a>
        <a href="#" className="hover:text-gray-900">Women</a>
        <a href="#" className="hover:text-gray-900">Kids</a>
        <a href="#" className="hover:text-gray-900">Okkio Selects</a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 w-64"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <FaHeart className="text-xl cursor-pointer text-gray-700 hover:text-red-500" />
        <FaShoppingCart className="text-xl cursor-pointer text-gray-700 hover:text-blue-500" />
        <FaUser className="text-xl cursor-pointer text-gray-700 hover:text-purple-500" />
      </div>
    </div>
  );
};

export default Navbar;
