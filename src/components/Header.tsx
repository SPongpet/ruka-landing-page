"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#A6171C] to-[#8a1419] fixed top-0 left-0 right-0 z-50 mx-auto w-full shadow-lg">
      <Container className="!px-0">
        <nav className="mx-auto flex justify-between items-center py-3 px-5">
          {/* โลโก้ด้านซ้าย */}
          <div className="flex-shrink-0" />

          {/* เมนูกลาง */}
          <ul className="hidden md:flex items-center space-x-8 font-semibold text-white">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="hover:text-[#F1C045] transition-colors duration-200 border-b-2 border-transparent hover:border-[#F1C045] pb-1 text-lg tracking-wide"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* ปุ่มด้านขวา */}
          <div className="hidden md:flex items-center space-x-4" />

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center border-2 border-white/30 hover:border-white/50"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          id="mobile-menu"
          className="md:hidden bg-gradient-to-b from-[#A6171C] to-[#8a1419] shadow-lg"
        >
          <ul className="flex flex-col space-y-2 pt-2 pb-6 px-6 font-semibold text-white">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="hover:text-[#F1C045] block py-2 px-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-6 py-3 rounded-lg font-bold text-sm block text-center transition-all duration-300"
                onClick={toggleMenu}
              >
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
