import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';


const PolicyPage = ({ title, content }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="flex flex-grow pt-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-grow p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-dark-text mb-8 text-center">{title}</h1>
          <div className="text-dark-text leading-relaxed [&_h2]:text-3xl [&_h2]:mt-6 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4">
            {content}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyPage;
