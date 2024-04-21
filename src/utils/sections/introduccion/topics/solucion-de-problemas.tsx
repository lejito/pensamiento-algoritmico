import { Video } from "@/components/content/Video";
import { Topic } from "@/utils/models/Topic";
import Image from "next/image";

export const solucionDeProblemas: Topic = {
  id: "solucion-de-problemas",
  title: "Solución de problemas",
  description: "Pasos para resolver problemas de forma efectiva.",
  content: (
    <>
      <section>
        <p>
          En el contexto de la solución de problemas y la implementación de
          algoritmos, es importante seguir un proceso lógico y estructurado para
          resolver problemas de forma efectiva. A continuación, se presentan los
          pasos generales para resolver problemas:
        </p>

        <ol className="list-none py-6 pl-10 flex flex-col gap-4">
          <li>
            <strong className="mr-2">
              1. Entender completamente el problema:
            </strong>
            <span>
              Este paso implica leer y comprender completamente el problema, lo
              que implica identificar el contexto del problema. Este paso es el
              más importante, ya que si no se entiende completamente el
              problema, no se podrá resolver de manera efectiva.
            </span>
          </li>
          <li>
            <strong className="mr-2">
              2. Analizar lo que se quiere resolver:
            </strong>
            <span>
              Aquí es importante identificar las entradas y salidas del
              problema, identificar las restricciones y reglas del problema y
              comprender completamente lo que se quiere lograr. Este paso es
              crucial para definir una solución efectiva.
            </span>
          </li>
          <li>
            <strong className="mr-2">
              3. Analizar la información que se tiene:
            </strong>
            <span>
              En este paso, es importante analizar la información disponible y
              determinar qué información es relevante para resolver el problema.
              Esto puede implicar identificar patrones, relaciones y posibles
              soluciones.
            </span>
          </li>
          <li>
            <strong className="mr-2">4. Planificar la solución:</strong>
            <span>
              En este paso, se debe definir un plan o estrategia para resolver
              el problema. Esto puede implicar identificar los pasos necesarios
              para llegar a la solución, definir un algoritmo o un enfoque
              general para resolver el problema.
            </span>
          </li>
          <li>
            <strong className="mr-2">5. Implementar la solución:</strong>
            <span>
              Una vez que se ha definido un plan, se debe implementar la
              solución utilizando el algoritmo o enfoque definido en el paso
              anterior. Esto puede implicar escribir código, realizar cálculos o
              seguir un conjunto de pasos definidos.
            </span>
          </li>
          <li>
            <strong className="mr-2">6. Probar la solución:</strong>
            <span>
              Es importante probar la solución para verificar su validez y
              eficacia. Para ello, es necesario realizar pruebas con diferentes
              casos de prueba, verificar los resultados y corregir posibles
              errores o problemas.
            </span>
          </li>
          <li>
            <strong className="mr-2">7. Refinar y mejorar la solución:</strong>
            <span>
              Una vez que se ha probado la solución, es importante revisarla,
              refinarla y mejorarla si es necesario. Esto puede implicar
              optimizar el código, corregir errores o identificar posibles
              mejoras en el enfoque utilizado.
            </span>
          </li>
        </ol>

        <p>
          La solución de problemas no es un proceso lineal y puede implicar la
          revisión y repetición de los pasos anteriores para llegar a una
          solución efectiva. Es importante ser paciente, persistente y creativo
          al resolver problemas y estar dispuesto a probar diferentes enfoques y
          soluciones. Aquí hay un diagrama que resume el ciclo de resolución de
          problemas:
        </p>

        <Image
          src="/Ciclo-solucion-de-problemas.png"
          alt="Ciclo de solución de problemas"
          width={533}
          height={253}
          className="mx-auto py-10 block dark:hidden"
        />

        <Image
          src="/Ciclo-solucion-de-problemas_dark.png"
          alt="Ciclo de solución de problemas"
          width={533}
          height={253}
          className="mx-auto py-10 hidden dark:block"
        />

        <Video videoId="SDv2vOIFIj8"></Video>
      </section>
    </>
  ),
};
