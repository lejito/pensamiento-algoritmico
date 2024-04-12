import React from "react";
import { Blockquote } from "@/components/Blockquote";
import { Video } from "@/components/VideoEmbeded";

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}
export interface Section {
  id: string;
  title: string;
  description: string;
  image: string;
  content?: React.ReactNode;
  topics: Topic[];
}

export const sections: Section[] = [
  {
    id: "introduccion",
    title: "Introducción",
    description:
      "Una breve introducción a la lógica de resolución de problemas.",
    image: "/1-introduccion.jpg",
    content: (
      <p>
        Una pequeña introducción a la lógica de resolución de problemas y
        algunos conceptos básicos importantes para comenzar a resolver problemas
        de forma efectiva y luego aplicarlos en la implementación de algoritmos.
      </p>
    ),
    topics: [
      {
        id: "que-es-la-logica",
        title: "¿Qué es la lógica?",
        description: "Conceptos básicos de la lógica y su aplicación.",
        content: (
          <>
            <p>
              Antes de comenzar a resolver problemas e implementar algoritmos,
              es importante entender qué es la lógica y cómo se aplica en la
              resolución de problemas. Una definición simple de lógica es:
            </p>

            <Blockquote
              author="Enciclopedia Significados"
              url="https://www.significados.com/logica/"
            >
              La lógica es una ciencia formal que estudia la estructura o formas
              del pensamiento humano (como proposiciones, conceptos y
              razonamientos) para establecer leyes y principios válidos con el
              objetivo de obtener criterios de verdad.
            </Blockquote>

            <p className="mb-8">
              En palabras más sencillas, la lógica es la manera más{" "}
              <strong>fácil</strong> y <strong>obvia</strong> de hacer cualquier
              cosa. La lógica se aplica en la resolución de problemas a través
              de la identificación de problemas, la formulación de hipótesis y
              soluciones, la evaluación de alternativas y la toma de decisiones
              basadas en la información disponible.
            </p>

            <p></p>

            <p>Repasa y apoyate del siguiente video para afianzar conceptos y tus conocimientos </p>

            <p></p>


            <Video videoId="EjV2LxEdz0c" />

            <p className="mt-4"></p>
          </>
        ),
      },
      {
        id: "que-es-un-problema",
        title: "¿Qué es un problema?",
        description: "Definición y clasificación de los problemas.",
        content: <p>Contenido</p>,
      },
      {
        id: "solucion-de-problemas",
        title: "Solución de problemas",
        description: "Pasos para resolver problemas de forma efectiva.",
        content: <p>Contenido</p>,
      },
      {
        id: "metodos-de-solucion-de-problemas",
        title: "Métodos de solución de problemas",
        description: "Técnicas y métodos para resolver problemas.",
        content: <p>Contenido</p>,
      },
    ],
  },
];
