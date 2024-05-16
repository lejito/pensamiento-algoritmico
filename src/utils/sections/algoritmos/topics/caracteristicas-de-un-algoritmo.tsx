import { Topic } from "@/utils/models/Topic";
import Image from "next/image";
import { algoritmos } from "../algoritmos";

export const caracteristicasDeUnAlgoritmo: Topic = {
  id: "caracteristicas-de-un-algoritmo",
  title: "Características de un algoritmo",
  description: "Factores que definen que un algoritmo es correcto.",
  content: (
    <section>
      <p>
        Para que un algoritmo sea considerado correcto, debe cumplir con las
        características que se muestran en la siguiente imagen:
      </p>

      <Image
        src="/Caracteristicas-de-un-algoritmo.svg"
        alt="Características de un algoritmo"
        width={400}
        height={400}
        className="mx-auto py-10"
      />

      <ol className="list-none py-6 pl-10 flex flex-col gap-4">
        <li>
          <strong className="mr-2">1. Legible:</strong>
          <span>
            Un algoritmo debe ser claro y entendible por cualquier persona
            fácilmente. Cuando un algoritmo es legible, es más fácil de
            comprender y de modificar. Para que un algoritmo sea legible, se
            recomienda usar nombres de variables y funciones descriptivos,
            evitando usar abreviaturas. Además, es recomendable usar comentarios
            para explicar el código, sobre todo las partes más complejas.
          </span>
        </li>

        <li>
          <strong className="mr-2">2. Finito:</strong>
          <span>
            Hace parte de la definición de algoritmo que este sea finito, es
            decir, que en algún momento el algoritmo debe terminar. No puede ser
            un algoritmo infinito, ya que no se podría obtener un resultado.
            Para verificar si un algoritmo es finito, se debe analizar si se
            puede llegar a un punto en el que se pueda decir que el algoritmo ha
            terminado. Por ejemplo, si se tiene un algoritmo que suma dos
            números, se puede decir que el algoritmo ha terminado cuando se ha
            sumado los dos números y se ha obtenido el resultado. Si un
            algoritmo no tiene un punto de finalización, entonces no se puede
            decir que es correcto, ya que no se podría obtener un resultado.
          </span>
        </li>

        <li>
          <strong className="mr-2">3. Preciso:</strong>
          <span>
            Un algoritmo debe ser preciso, es decir, debe ser capaz únicamente
            de resolver el problema para el que fue diseñado. Los pasos deben
            estar ordenados de forma correcta, teniendo en cuenta el flujo que
            se debe seguir, evitando la ambigüedad en la implementación de cada
            paso a seguir para resolver el problema. Por ejemplo, si se desea un
            algoritmo que sume dos números, se debe especificar claramente cómo
            se deben sumar los números: si se deben sumar los números enteros o
            decimales, si se deben sumar los números positivos o negativos, etc.
            No tendría sentido que un algoritmo que suma dos números devuelva el
            resultado de una operación distinta, como por ejemplo, que
            multiplique los números o que reste los números, o que junte los
            números en una cadena de texto. Un algoritmo no debería resolver un
            problema distinto al que se le pide resolver.
          </span>
        </li>

        <li>
          <strong className="mr-2">4. Definido:</strong>
          <span>
            Un algoritmo debe ser definido, es decir, debe tener un conjunto de
            pasos bien definidos y claros que se deben seguir para resolver el
            problema. Los pasos deben ser precisos y no deben dejar lugar a la
            interpretación. Cada paso debe ser claro y no debe haber ambigüedad
            en la implementación de los pasos. Si se ejecuta un algoritmo dos o
            más veces con los mismos datos de entrada, se debe obtener el mismo
            resultado (Ejemplo: 2 + 3 es siempre igual a 5).
          </span>
        </li>

        <li>
          <strong className="mr-2">5. Eficiente:</strong>
          <span>
            Un algoritmo debe ser eficiente, es decir, debe ser capaz de
            resolver el problema en un tiempo razonable y con los recursos
            necesarios mínimos. Un algoritmo eficiente es aquel que utiliza la
            menor cantidad de recursos posibles para resolver el problema. Por
            ejemplo, si se tiene un algoritmo que suma dos números, se podría
            implementar de diferentes formas. Una forma eficiente sería sumar
            los números directamente, mientras que una forma ineficiente sería
            sumar los números uno a uno, lo cual llevaría más tiempo y recursos.
            Un algoritmo eficiente es aquel que resuelve el problema en el menor
            tiempo posible y con la menor cantidad de recursos posibles.
          </span>
        </li>

        <li>
          <strong className="mr-2">6. Flexible:</strong>
          <span>
            Un algoritmo debe ser flexible, es decir, debe ser capaz de
            adaptarse a diferentes situaciones y condiciones. Un algoritmo
            flexible es aquel que puede ser modificado o adaptado fácilmente
            para resolver problemas similares o relacionados. Por ejemplo, si se
            tiene un algoritmo que suma dos números, se podría adaptar
            fácilmente para restar dos números, multiplicar dos números, etc. Un
            algoritmo flexible es aquel que puede ser reutilizado para resolver
            problemas similares o relacionados.
          </span>
        </li>

        <li>
          <strong className="mr-2">6. Modular:</strong>
          <span>
            Un algoritmo debe ser modular, es decir, debe estar dividido en
            módulos o partes más pequeñas que se puedan reutilizar en otros
            algoritmos. Por ejemplo, si se tiene un algoritmo que suma dos
            números, se podría dividir en dos partes: una parte que suma los
            números y otra parte que muestra el resultado. De esta forma, se
            podría reutilizar la parte que suma los números en otro algoritmo
            que necesite sumar dos números. Un algoritmo modular es aquel que
            está dividido en partes más pequeñas y que se pueden reutilizar en
            otros algoritmos.
          </span>
        </li>
      </ol>
    </section>
  ),
};
