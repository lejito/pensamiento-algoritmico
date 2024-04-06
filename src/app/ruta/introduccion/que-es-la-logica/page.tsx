import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Introducción: ¿Qué es la lógica? | Pensamiento Algorítmico",
};

export default function QueEsLaLogicaPage() {
  return (
    <div>
      <header id="header" className="relative z-20 h-[100rem]">
        <div>
          <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
            Introducción
          </p>
          <div className="flex items-center">
            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
              ¿Qué es la lógica?
            </h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-slate-800 dark:text-slate-300">
          Utilities for controlling the text color of an element.
        </p>
      </header>
    </div>
  );
}
