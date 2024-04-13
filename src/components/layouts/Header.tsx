"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AsideMobile } from "./AsideMobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full h-[4.4rem] p-2 flex-none backdrop-blur transition-colors duration-500 bg-slate-200/80 dark:bg-slate-900/80 border-b border-slate-300 dark:border-slate-700">
        <nav className="mx-auto h-full flex justify-between items-center align-middle px-4">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="block lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-4 w-8 h-8 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-500"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
            <Link className="text-base sm:text-lg font-semibold" href="/">
              <h1 className="text-transparent font-bold bg-clip-text truncate ... bg-gradient-to-br from-slate-600 to-slate-950 dark:from-slate-50 dark:to-slate-300">
                Pensamiento Algorítmico
              </h1>
            </Link>
          </div>
          <div className="flex gap-2">
            <a
              title="UdeMedellín"
              className="opacity-90 hover:opacity-100 hover:bg-blue-100 dark:hover:bg-blue-100/10 py-2 pl-4 pr-5 rounded-full transition-colors"
              href="https://www.udemedellin.edu.co/"
              target="_blank"
            >
              <Image
                className="block dark:hidden"
                src="/logo_udemedellin.png"
                alt="Logo UdeMedellín"
                width={120.75}
                height={37.5}
              />
              <Image
                className="hidden dark:block"
                src="/logo_udemedellin_dark.png"
                alt="Logo UdeMedellín"
                width={120.75}
                height={37.5}
              />
            </a>
          </div>
        </nav>
      </header>
      {isMenuOpen && <AsideMobile />}
    </>
  );
}
