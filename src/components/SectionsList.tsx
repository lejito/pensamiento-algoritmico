import Image from "next/image";
import Link from "next/link";

export function SectionsList() {
  const sections = [
    {
      title: "Introducción",
      description:
        "Una breve introducción a la lógica de resolución de problemas.",
      image: "/1-introduccion.jpg",
      href: "/ruta/introduccion/que-es-la-logica",
    },
    {
      title: "Algoritmos",
      description:
        "Conceptos básicos de los algoritmos y el paso a paso para implementarlos.",
      image: "/2-algoritmos.jpg",
      href: "/ruta/algoritmos",
    },
    {
      title: "Programas",
      description:
        "Cómo se estructuran los programas, su ciclo de vida y una pequeña introducción a los lenguajes de programación.",
      image: "/3-programas.jpg",
      href: "/ruta/programas",
    },
    {
      title: "Herramientas de programación",
      description:
        "Los tipos de datos, identificadores, operadores y expresiones principales y cómo se utilizan en Python.",
      image: "/4-herramientas-de-programacion.jpg",
      href: "/ruta/herramientas-de-programacion",
    },
    {
      title: "Estructuras de control",
      description:
        "Estructuras de control de flujo como las secuenciales, condicionales y repetitivas",
      image: "/5-estructuras-de-control.jpg",
      href: "/ruta/estructuras-de-control",
    },
    {
      title: "Modularidad y funciones",
      description:
        "La modularidad y las funciones como herramientas para organizar y reutilizar código.",
      image: "/6-modularidad-y-funciones.jpg",
      href: "/ruta/modularidad-y-funciones",
    },
    {
      title: "Arreglos",
      description:
        "Los arreglos, tipos de arreglos y formas de operar con ellos.",
      image: "/7-arreglos.jpg",
      href: "/ruta/arreglos",
    },
  ];

  return (
    <ul className="flex flex-wrap w-full pt-8 pb-16 px-10 text-center justify-center bg-slate-100 dark:bg-transparent">
      {sections.map((section) => (
        <li key={sections.indexOf(section) + 1} className="flex basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2">
          <Link
            href={section.href}
            className="flex flex-col bg-white dark:bg-slate-700 dark:text-white rounded-md hover:-translate-y-1 hover:shadow-lg transition-all items-center p-4"
          >
            <div className="relative h-60 w-full">
              <Image
                src={section.image}
                alt={section.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="my-2 text-xl font-medium">{section.title}</h2>
            <p className="text-slate-500 dark:text-slate-400">{section.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
