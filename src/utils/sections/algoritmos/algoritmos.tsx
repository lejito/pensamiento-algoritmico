import { Section } from "@/utils/models/Section";
import { queEsUnAlgoritmo } from "./topics/que-es-un-algoritmo";
import { caracteristicasDeUnAlgoritmo } from "./topics/caracteristicas-de-un-algoritmo";
import { partesDeUnAlgoritmo } from "./topics/partes-de-un-algoritmo";
import { etapasParaLaCreacionDeUnAlgoritmo } from "./topics/etapas-para-la-creacion-de-un-algoritmo";
import { mediosDeExpresionDeUnAlgoritmo } from "./topics/medios-de-expresion-de-un-algoritmo";

export const algoritmos: Section = {
  id: "algoritmos",
  title: "Algoritmos",
  description:
    "Conceptos básicos de los algoritmos y el paso a paso para implementarlos.",
  image: { src: "/algoritmos.jpg", width: 1280, height: 886 },
  content: (
    <p>
      Adéntrate en el mundo de los algoritmos y aprende cómo implementarlos paso
      a paso. Descubre los conceptos básicos y las técnicas fundamentales para
      resolver problemas algorítmicamente.
    </p>
  ),
  topics: [
    queEsUnAlgoritmo,
    caracteristicasDeUnAlgoritmo,
    partesDeUnAlgoritmo,
    etapasParaLaCreacionDeUnAlgoritmo,
    mediosDeExpresionDeUnAlgoritmo,
  ],
};
