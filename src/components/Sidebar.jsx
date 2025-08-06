import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    "Topwear", "Bottomwear", "Official Merch", "Bestsellers", "Markdowns",
    "Juniors", "All Accessories", "MY MEMBERSHIP", "Stores Near Me",
    "Track My Order", "More"
  ];

  return (
    <div className="bg-gray-50 w-64 p-4 hidden md:block h-full fixed top-0 left-0 pt-20 overflow-y-auto border-r border-gray-200">
      <h1 className="font-bold text-2xl mb-6 text-gray-800">@okkio.in</h1>
      <ul className="space-y-3 text-lg">
        {menuItems.map(item => (
          <li key={item}><a href="#" className="hover:text-gray-600 block py-1 text-gray-700">{item}</a></li>
        ))}
      </ul>
      <div className="mt-8 flex space-x-4">
        <FaInstagram className="text-2xl cursor-pointer text-gray-700 hover:text-gray-900" />
        <FaWhatsapp className="text-2xl cursor-pointer text-gray-700 hover:text-gray-900" />
      </div>
    </div>
  );
};

export default Sidebar;
