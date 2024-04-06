import Link from "next/link";

export function Aside() {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-16 w-80 pt-6 pb-10 pl-10 pr-6 overflow-y-auto border-r border-slate-300 dark:border-slate-700">
      <nav className="relative">
        <ul>
          <li>
            <h2 className="mt-4 font-semibold text-slate-700 dark:text-slate-100">Introducción</h2>
            <ul>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-900 hover:text-slate-900 border-l border-slate-500 hover:border-slate-400 dark:text-slate-100 dark:hover:text-slate-100 dark:border-slate-100 dark:hover:border-slate-100">
                <Link href="/core/introduction/que-es-la-logica">
                  ¿Qué es la lógica?
                </Link>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/core/colors">Colors</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/core/typography">Typography</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/core/shadows">Shadows</a>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="mt-4 font-semibold text-slate-700 dark:text-slate-100">Components</h2>
            <ul>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/buttons">Buttons</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/input">Input</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/status-pill">Status pills</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/table">Table</a>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="mt-4 font-semibold text-slate-700 dark:text-slate-100">Components</h2>
            <ul>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/buttons">Buttons</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/input">Input</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/status-pill">Status pills</a>
              </li>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/components/table">Table</a>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="mt-4 font-semibold text-slate-700 dark:text-slate-100">Patterns</h2>
            <ul>
              <li className="block py-2 px-6  my-1 transition-colors text-slate-500 hover:text-slate-900 border-l border-slate-200 hover:border-slate-400 dark:text-slate-400 dark:hover:text-slate-300 dark:border-slate-400 dark:hover:border-slate-300">
                <a href="/patterns/introduction">Introduction</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
