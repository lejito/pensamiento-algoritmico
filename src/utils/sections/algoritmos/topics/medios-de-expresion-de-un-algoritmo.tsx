import { Question } from "@/components/content/Question";
import { Video } from "@/components/content/Video";
import { Topic } from "@/utils/models/Topic";

export const mediosDeExpresionDeUnAlgoritmo: Topic = {
  id: "medios-de-expresion-de-un-algoritmo",
  title: "Medios de expresión de un algoritmo",
  description: "Formas de representar un algoritmo.",
  content:
    <section>
      Los medios de expresión de un algoritmo son la representación de una serie de pasos o instrucciones de algoritmo mediante
      símbolos o palabras que dan solución a un problema determinado.

      Existen dos grandes medios de expresión de un algoritmo:

      <ol>
        <li>
          <strong>1. Textual:</strong>
          <ul>
            <li className="mt-5">
              <p>
                <strong>Lenguaje natural: </strong>
                Descripción no-formal, tienden a ser ambiguas y extensas.
              </p>
            </li>
            <li className="mt-5"> 
              <p>
                <strong>Pseudocódigo: </strong>
                Descripción de un algoritmo que asemeja a un lenguaje de
                programación pero con algunas convenciones del lenguaje
                natural.
              </p>
            </li>
          </ul>
        </li>
        <li className="mt-10">
          <strong>2. Gráfico:</strong>
          <ul>
            <li className="mt-5">
              <p>
                <strong>Diagrama de flujo: </strong>
                Uso de símbolos conectados con flechas para indicar la secuencia
                de instrucciones, según normas ISO.
                Son de construcción es laboriosa.
              </p>
            </li>
            <li className="mt-5">
              <p>
                <strong>Diagrama de caja: </strong>
                Utiliza una serie de cajas, similar a los diagramas de flujos, pero
                no requiere la utilización de flechas, debido a que su flujo
                siempre es descendente.
              </p>
            </li>
          </ul>
        </li>
      </ol>

      <p className="mt-10"> Mira los siguientes videos y luego responde las preguntas:</p>

      <Video videoId="KcSD3r16Pl0"></Video>

      <Question
          id="s2t5q1"
          type="one-choice"
          title="Sobre el video (1)"
          question="¿Para qué se utiliza el pseudocódigo?"
          answer="Paso intermedio entre el lenguaje natural y el lenguaje de programación"
          options={[
            "Código escrito en Python",
            "Paso intermedio entre el lenguaje natural y el lenguaje de programación",
            "Contrucción de un algoritmo usando símbolos y flechas",
            "Una forma de documentar el código",
          ]}
          randomizeOptions={true}
          feedback="Repasa al principio del video la definición que da Kiko sobre el pseudocódigo."
        />

      <Video videoId="Q1z34G3fTUM"></Video>

      <Question
          id="s2t5q2"
          type="one-choice"
          title="Sobre el video (2)"
          question="¿Cuál es una ventaja del psudocódigo?"
          answer="Todas las anteriores"
          options={[
            "Facilita la comprensión del algoritmo",
            "Se puede aplicar a cualquier lenguaje de programación",
            "Es más sencillo de implementar que el diagrama de flujo",
            "Todas las anteriores",
          ]}
          randomizeOptions={true}
          feedback="Repasa las ventajas que se muestran en el minuto (2:50)"
        />

      <Video videoId="45wrR4CH9NU"></Video>

      <Question
          id="s2t5q3"
          type="one-choice"
          title="Sobre el video (3)"
          question="¿Qué componentes se usan para crear diagramas de flujo?"
          answer="Flechas, flujos, inicio, fin, procesos y decisiones"
          options={[
            "Flechas, flujos, inicio, fin, procesos y decisiones",
            "Lenguaje natural ",
            "Llaves, paréntesis, corchetes y flechas",
            "Pseudocódigo",
          ]}
          randomizeOptions={true}
          feedback=""
        />


    </section>
};
