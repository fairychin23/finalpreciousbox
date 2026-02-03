"use client";
import React from "react";
import Link from "next/link";
import { Film } from "lucide-react";

export default function Navbar() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className="w-full bg-gray-800 p-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo as Lucide Icon */}
        <div className="flex items-center space-x-2">
          <Film className="text-green-500 w-8 h-8" />
          <Link href="/">
            <span className="text-white font-bold text-lg cursor-pointer">
             MovieBox
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
