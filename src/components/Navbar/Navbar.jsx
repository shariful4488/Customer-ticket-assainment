
import React from 'react';

const Navbar = () => {
    return (
         <div className="border-b-[0.5px] border-gray-200">
      
      <nav className="px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            FAQ
          </a>
          <a href="#" className="text-gray-600">
            Changelog
          </a>

          <a href="#" className="text-gray-600">
            Blog
          </a>
          <a href="#" className="text-gray-600">
            Download
          </a>
          <a href="#" className="text-gray-600">
            Contact
          </a>
          <button className=" bg-[#422AD5] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            + New Ticket
          </button>
        </div>
      </nav>
      
    </div>
    );
};

export default Navbar;
