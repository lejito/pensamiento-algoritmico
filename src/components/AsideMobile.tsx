"use client";
import { sections } from "@/utils/sections";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AsideMobile() {
  const pathname = usePathname();

  return (
    <aside className="block lg:hidden fixed z-40 w-auto max-w-[75%] h-[calc(100%-4.4rem)] pt-6 pb-10 pl-10 pr-6 overflow-y-auto backdrop-blur transition-colors duration-500 bg-slate-100/80 dark:bg-slate-900/80 border-r border-slate-300 dark:border-slate-700">
      <nav className="relative">
        <ul className="pt-">
          {sections.map((section) => (
            <li key={sections.indexOf(section) + 1} className="pb-5">
              <h2 className="mb-4 font-semibold text-lg leading-5 text-slate-950 dark:text-slate-50">
                {section.title}
              </h2>
              <ul>
                {section.pages &&
                  section.pages.map((page) => (
                    <li key={section.pages.indexOf(page) + 1}>
                      <Link
                        href={"/ruta" + section.href + page.href}
                        className={`block py-2 px-6 my-2 transition-colors border-l duration-300 ${
                          pathname === "/ruta" + section.href + page.href
                            ? "border-slate-700 text-slate-950 dark:border-slate-200 dark:text-slate-200"
                            : "border-slate-300 text-slate-400 dark:border-slate-500 dark:text-slate-500 hover:border-slate-500 hover:text-slate-600 dark:hover:border-slate-400 dark:hover:text-slate-400"
                        }`}
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
