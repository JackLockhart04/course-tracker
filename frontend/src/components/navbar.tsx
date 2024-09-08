"use client";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "./auth"; // Import the useAuth hook

import NavigationButton from "./navigationButton";
import DropdownMenu from "./dropdownMenu";

const Navbar: React.FC = () => {
  const { username, logout } = useAuth(); // Use the useAuth hook

  return (
    <nav className="h-24 w-full flex px-4 space-x-4 items-center bg-gray-200">
      <Link href="/" className="h-3/4 aspect-square">
        <Image
          src="/assets/brick-wall.jpg"
          alt="Logo"
          width={70}
          height={70}
          priority
        />
      </Link>
      <div className="h-1/2 w-24 flex">
        <NavigationButton label="Dashboard" href="/dashboard" />
      </div>
      <div className="flex-grow" />
      {username ? (
        <div className="h-1/2 w-24 flex">
          <NavigationButton label="Profile" href="/profile" />
        </div>
      ) : (
        <div className="h-1/2 w-24 flex">
          <NavigationButton label="Login" href="/login" />
        </div>
      )}
      <div className="h-1/2 w-20 aspect-square flex">
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Navbar;
