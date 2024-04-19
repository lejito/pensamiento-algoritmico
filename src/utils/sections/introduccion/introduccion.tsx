import { Section } from "@/utils/models/Section";
import { queEsLaLogica } from "./topics/que-es-la-logica";
import { queEsUnProblema } from "./topics/que-es-un-problema";
import { solucionDeProblemas } from "./topics/solucion-de-problemas";
import { metodosDeSolucionDeProblemas } from "./topics/metodos-de-solucion-de-problemas";

export const introduccion: Section = {
  id: "introduccion",
  title: "Introducción",
  description: "Una breve introducción a la lógica de resolución de problemas.",
  image: { src: "/introduccion.jpg", width: 1280, height: 720 },
  content: (
    <p>
      Una pequeña introducción a la lógica de resolución de problemas y algunos
      conceptos básicos importantes para comenzar a resolver problemas de forma
      efectiva y luego aplicarlos en la implementación de algoritmos.
    </p>
  ),
  topics: [
    queEsLaLogica,
    queEsUnProblema,
    solucionDeProblemas,
    metodosDeSolucionDeProblemas,
  ],
};
