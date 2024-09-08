import React, { useState } from "react";
import Link from "next/link";

import { useAuth } from "./auth"; // Import the useAuth hook

const DropdownMenu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const { username } = useAuth(); // Use the useAuth hook

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    closeDropdown();
  };

  return (
    <div
      className="grow flex relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="grow flex flex-col justify-center items-center space-y-1 text-white bg-blue-700 hover:bg-blue-500 rounded"
      >
        <div className="w-8 h-1 bg-white rounded"></div>
        <div className="w-8 h-1 bg-white rounded"></div>
        <div className="w-8 h-1 bg-white rounded"></div>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 top-full mb-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
          <Link
            href="/"
            onClick={closeDropdown}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Home
          </Link>
          {username ? (
            <Link
              href="/profile"
              onClick={closeDropdown}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Profile
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={closeDropdown}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Login
            </Link>
          )}

          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
