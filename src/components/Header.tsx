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

  const leftMenuItems = menuItems.slice(0, 3); // Home, About Us, Services
  const rightMenuItems = menuItems.slice(3); // Products, Blog, Contact Us

  return (
    <header className="bg-white backdrop-blur-lg fixed top-0 left-0 right-0 z-50 mx-auto w-full border-b border-[#f7f7f7]/20 shadow-lg">
      <Container className="!px-0">
        <nav className="mx-auto flex justify-between items-center py-4 px-5">
          {/* ซ้ายเมนู */}
          <ul
            className="hidden md:flex flex-1 justify-end space-x-8 font-bold text-lg pr-5"
            style={{ fontFamily: "Fredoka One, Arial, sans-serif" }}
          >
            {leftMenuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-[#000000] hover:text-[#A6171C] transition-colors border-b-2 border-transparent hover:border-[#A6171C] pb-1"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* โลโก้ตรงกลาง */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 select-none">
              <span
                className="text-4xl font-bold"
                style={{ fontFamily: "Fredoka One, Arial, sans-serif" }}
              >
                {/* <span className="text-ruby">R</span>
                <span className="text-sunny">ukà</span> */}
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </span>
            </Link>
          </div>

          {/* ขวาเมนู */}
          <ul
            className="hidden md:flex flex-1 justify-start space-x-8 font-bold text-lg pl-5"
            style={{ fontFamily: "Fredoka One, Arial, sans-serif" }}
          >
            {rightMenuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-[#000000] hover:text-[#A6171C] transition-colors border-b-2 border-transparent hover:border-[#A6171C] pb-1"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-sunny text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center border-2 border-sunny"
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
          className="md:hidden bg-gradient-to-b from-white/95 via-[#D6D0C5]/90 to-[#f0e0d8]/90 backdrop-blur-lg shadow-lg"
        >
          <ul
            className="flex flex-col space-y-4 pt-1 pb-6 px-6 font-bold text-lg"
            style={{ fontFamily: "Fredoka One, Arial, sans-serif" }}
          >
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-[#2d1a18] hover:text-[#A6171C] block border-b-2 border-transparent hover:border-[#A6171C] pb-1"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link
                href="#cta"
                className="text-ruby bg-white hover:bg-sunny hover:text-white px-5 py-2 rounded-full block w-fit font-bold border-2 border-white hover:border-sunny"
                onClick={toggleMenu}
              >
                Catalog
              </Link>
            </li> */}
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
