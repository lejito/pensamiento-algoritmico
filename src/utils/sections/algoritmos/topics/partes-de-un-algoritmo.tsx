import { Video } from "@/components/content/Video";
import { Topic } from "@/utils/models/Topic";
import Image from "next/image"; // Import the Image component from the correct package

export const partesDeUnAlgoritmo: Topic = {
  id: "partes-de-un-algoritmo",
  title: "Partes de un algoritmo",
  description: "La estructura básica de un algoritmo.",
  content: <section>
      <p>
        Un algoritmo se compone de varias partes que le permiten cumplir con su objetivo de manera eficiente y efectiva. Las partes más importantes de un algoritmo son:
      </p>

      <ul className="mt-10">
        <li className="mt-10"> 
          <strong>Entrada:</strong> Es la información que el algoritmo necesita para realizar su tarea. Puede ser un conjunto de datos, un número, una cadena de texto, etc.
        </li>

        <li className="mt-10">
          <strong>Proceso:</strong> Es la secuencia de pasos que el algoritmo sigue para transformar la entrada en la salida deseada. En esta parte se realizan las operaciones necesarias para resolver el problema planteado.
        </li>

        <li className="mt-10">
          <strong>Salida:</strong> Es el resultado final que el algoritmo produce después de procesar la entrada. Puede ser un número, un mensaje, un archivo, etc.
        </li>

        <li className="mt-10">
          <strong>Control:</strong> Son las instrucciones que permiten al algoritmo tomar decisiones y realizar acciones en función de ciertas condiciones. Por ejemplo, un bucle que se repite hasta que se cumple una condición.
        </li>

        <li className="mt-10">
          <strong>Comentarios:</strong> Son anotaciones que se incluyen en el código del algoritmo para explicar su funcionamiento, hacerlo más legible y facilitar su mantenimiento.
        </li>
      </ul>

      <Video videoId="TATzhyutuWw"></Video>

  </section>,
};
