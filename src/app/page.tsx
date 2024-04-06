import Image from "next/image";
import { SectionsList } from "@/components/SectionsList";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-950 min-h-screen text-center">
      <header className="pt-12 px-8 md:px-20">
        <div className="mb-10 relative h-16 md:h-20 w-full">
          <Image
            src={"/logo_udemedellin_dark.png"}
            alt="Logo UdeMedellín"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">
          Pensamiento Algorítmico: Ruta de aprendizaje
        </h1>
        <p className="text-sm md:text-lg mt-4 text-slate-300">
          Con esta ruta de aprendizaje lograrás adquirir los conceptos básicos y
          fundamentos de la programación y la lógica.
        </p>

        <hr className="my-8 border-t-2 border-dashed border-slate-500 w-10 mx-auto" />

        <p className="text-xs md:text-sm mt-8 text-slate-500">
          Este es un proyecto desarrollado desde las monitorías académicas de la
          asignatura <strong>Pensamiento Algorítmico</strong> de la{" "}
          <strong>Facultad de Ingenierías</strong> de la{" "}
          <a
            href="https://udemedellin.edu.co/"
            target="_blank"
            className="font-bold underline hover:text-amber-500 transition-all ease-in-out"
          >
            Universidad de Medellín
          </a>
          . La estructura y los contenidos de esta ruta de aprendizaje se basan
          en el microcurrículo y bibliografía de la asignatura.
        </p>
      </header>

      <SectionsList />
    </div>
  );
}
