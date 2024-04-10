import { Blockquote } from "@/components/Blockquote";
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
        <div className="mt-2 text-sm sm:text-lg text-slate-800 dark:text-slate-300">
          <p>
            Antes de comenzar a resolver problemas e implementar algoritmos, es
            importante entender qué es la lógica y cómo se aplica en la
            resolución de problemas.
          </p>

          <Blockquote>
            La lógica es una ciencia formal que estudia la estructura o formas
            del pensamiento humano (como proposiciones, conceptos y
            razonamientos) para establecer leyes y principios válidos con el
            objetivo de obtener criterios de verdad.
          </Blockquote>
        </div>
      </header>
    </div>
  );
}
