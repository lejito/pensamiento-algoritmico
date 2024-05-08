import { Topic } from "@/utils/models/Topic";
import { TextLink } from "../../../../components/content/TextLink";
import { Blockquote } from "@/components/content/Blockquote";
import { Video } from "@/components/content/Video";
import { Question } from "@/components/content/Question";

export const queEsUnAlgoritmo: Topic = {
  id: "que-es-un-algoritmo",
  title: "¿Qué es un algoritmo?",
  description: "Definición básica de qué es un algoritmo.",
  content: (
    <>
      <section>
        <p>
          La palabra &quot;algoritmo&quot; proviene del nombre de un matemático
          persa del siglo IX llamado{" "}
          <TextLink
            text="Al-Juarismi"
            link="https://es.wikipedia.org/wiki/Al-Juarismi"
          />
          , quien escribió un libro llamado &quot;Algoritmi de numero
          Indorum&quot;, que significa &quot;Algoritmos de los números
          indios&quot;. En este libro se describen los métodos de cálculo con
          números arábigos, que en ese entonces eran llamados números indios. A
          partir de este libro, la palabra &quot;algoritmo&quot; adquirió el
          significado que tiene hoy en día.
        </p>

        <Blockquote
          author="Definicion.de"
          url="https://definicion.de/algoritmo/"
        >
          Se denomina algoritmo a un grupo finito de operaciones organizadas de
          manera lógica y ordenada que permite solucionar un determinado
          problema. Se trata de una serie de instrucciones o reglas establecidas
          que, por medio de una sucesión de pasos, permiten arribar a un
          resultado o solución.
        </Blockquote>

        <p>
          En resumen, un algoritmo es un conjunto de pasos ordenados y finitos
          que permiten resolver un problema. Es como una receta de cocina, en la
          que se indica qué ingredientes se necesitan y cómo se deben mezclar
          para obtener un plato en particular. En el caso de los algoritmos, los
          ingredientes son los datos de entrada, los pasos son las operaciones
          que se deben realizar y el plato final es el resultado que se obtiene
          al final del proceso.
        </p>

        <p>
          Los algoritmos son utilizados en muchas áreas de la ciencia y la
          tecnología, como la informática, las matemáticas, la física, la
          química, la biología, la economía, entre otras. Son fundamentales en
          la programación de computadoras, ya que permiten automatizar tareas y
          resolver problemas de manera eficiente.
        </p>

        <p>
          A continuación encontrarás un video que hace parte de una playlist de{" "}
          <TextLink
            text="Programación para todos"
            link="https://www.youtube.com/@Programacionparatodos"
          />
          , en el que se explica de manera sencilla qué es un algoritmo y más:
        </p>

        <Video videoId="FS9u9cIGf3o" />

        <Question
          id="s2t1q1"
          type="one-choice"
          title="Sobre el video (1)"
          question="En el video, ¿cuál es el ejemplo de algoritmo que se menciona?"
          answer="Una receta de cocina"
          options={[
            "Un problema de matemáticas",
            "Una receta de cocina",
            "Un juego de mesa",
            "Una ruta para llegar a la escuela",
          ]}
          randomizeOptions={true}
          feedback="Una receta de cocina es el ejemplo ilustrativo de algoritmo que se menciona en el video (minuto 1:13)."
        />

        <Question
          id="s2t1q2"
          type="one-choice"
          title="Sobre el video (2)"
          question="¿Cuáles son los tipos de datos que se mencionan en el video?"
          answer="Cualitativos y cuantitativos"
          options={[
            "Enteros y decimales",
            "Positivos y negativos",
            "Reales e imaginarios",
            "Cualitativos y cuantitativos",
          ]}
          randomizeOptions={true}
          feedback="Los tipos de datos mencionados son los cualitativos y los cuantitativos (minuto 2:32)."
        />
      </section>
    </>
  ),
};
