import { Topic } from "@/utils/models/Topic";
import { Blockquote } from "@/components/content/Blockquote";
import { Question } from "@/components/content/Question";
import { Video } from "@/components/content/Video";

export const queEsUnProblema: Topic = {
  id: "que-es-un-problema",
  title: "¿Qué es un problema?",
  description: "Definición y clasificación de los problemas.",
  content: (
    <>
      <section>
        <p>
          Ya que sabes que es la lógica y cómo se aplica, es hora de usarla
          para resolver problemas. Pero, ¿qué es un problema? ¿Cómo se
          define un problema? Vamos a responder a estas preguntas.
        </p>

        <Blockquote
          author="UNICEF"
          url="https://www.unicef.org/lac/misi%C3%B3n-4-resoluci%C3%B3n-de-problemas"
        >
          La habilidad de resolución de problemas se puede definir como la
          capacidad para identificar un problema, tomar medidas lógicas para
          encontrar una solución deseada, y supervisar y evaluar la
          implementación de tal solución.
        </Blockquote>

        <p className="">
          Un problema es un enunciado en el cual se da cierta{" "}
          <strong>información</strong> y se plantea una
          <strong> pregunta</strong> que debe ser respondida; en general se
          pide calcular o indagar uno o más <strong>datos</strong> faltantes
          o generar explicaciones acerca de ciertos hechos o situaciones.
        </p>

        <Question
          id="s1t2q1"
          type="one-choice"
          title="Definición de un problema"
          question="¿Cuál de las siguientes opciones describe mejor lo que es un problema en el contexto de la resolución de problemas?"
          answer="Una situación o cuestión que requiere una solución o respuesta."
          options={[
            "Una situación que no tiene solución.",
            "Una cuestión que no tiene una respuesta única.",
            "Una situación o cuestión que requiere una solución o respuesta.",
            "Una tarea que solo puede ser resuelta mediante la intuición.",
          ]}
          randomizeOptions={true}
          feedback="Un problema si bien puede tener múltiples soluciones, y usa la lógica e intuición, en general es algo que requiere una solución o respuesta que satisfaga las condiciones planteadas en un enunciado."
        />

        <Video videoId="vpmi739bA14" />
      </section>
    </>
  ),
}