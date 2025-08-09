import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`bg-primary-background w-64 p-4 h-screen fixed top-20 left-0 overflow-y-auto border-r border-gray-200 transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="pt-20">
        <h1 className="font-bold text-2xl mb-6 text-dark-text">@okkio.in</h1>
        <ul className="list-none p-0 m-0 flex flex-col space-y-3 text-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              {typeof item === 'object' ? (
                <Link to={item.path} className="text-dark-text block py-1 hover:text-candy-red">
                  {item.name}
                </Link>
              ) : (
                <a href="#" className="text-dark-text block py-1 hover:text-candy-red">
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex space-x-4">
          <FaInstagram className="text-2xl cursor-pointer text-dark-text hover:text-candy-red" />
          <FaWhatsapp className="text-2xl cursor-pointer text-dark-text hover:text-candy-red" />
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  "Home", 
  { name: "Men", path: "/category/men" }, 
  { name: "Women", path: "/category/women" }, 
  { name: "Kids", path: "/category/kids" }, 
  { name: "Okkio Selects", path: "/category/okkio-selects" },
  "Topwear", "Bottomwear", "Official Merch", "Bestsellers", "Markdowns",
  "Juniors", "All Accessories", "MY MEMBERSHIP", "Stores Near Me",
  { name: "Track My Order", path: "/track-order" }, "More"
];

export default Sidebar;
