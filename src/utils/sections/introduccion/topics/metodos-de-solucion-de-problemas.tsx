import { Video } from "@/components/content/Video";
import { Topic } from "@/utils/models/Topic";

export const metodosDeSolucionDeProblemas: Topic = {
  id: "metodos-de-solucion-de-problemas",
  title: "Métodos de solución de problemas",
  description: "Técnicas y métodos para resolver problemas.",
  content: (
    <>
      <section>
        <p>
          Existen muchos métodos o estrategias para llegar a la solución
          de un problema, como también existen varias soluciones para
          el mismo. Pero, ¿Cuál escoger?
        </p>

        <ol className="list-none py-6 pl-10 flex flex-col gap-4">
          <li>
            <strong className="mr-2 mb-4" >
              1.Particularización y Generalización:
            </strong>
            <p className="mb-4" >
              Reflexionar.
              La solución de un problema solo es posible una vez que se ha
              <strong> entendido </strong> lo que debe solucionarse, buscando encontrar que
              es lo que hay que hacer y no cómo se debe hacer. Es
              importante la formulación de preguntas tales como: ¿Qué
              información hay?, ¿Qué quiero saber?, ¿Qué puedo utilizar?
            </p>
            <p className="mb-4">
              Particularizar.
              Una buena manera de comenzar a buscar la solución es
              escogiendo <strong>ejemplos específicos</strong> y tratar de resolverlos
              determinando el mecanismo de solución de ese problema en
              particular, planteándolo en términos o pasos generales.
            </p>

            <p className="mb-4">
              Generalizar:
              Luego de la aproximación inicial al problema se busca
              una solución general agrupando bajo un mismo esquema
              todas las soluciones particulares.
            </p>

            <p className="mb-4">
              Verificar:
              Luego de obtener una solución general, se realizan pruebas con
              diferentes casos o ejemplos comprobando que efectivamente sea
              una solución satisfactoria al problema propuesto, de lo contrario se
              debe reiniciar el proceso con base en aquellos casos para los cuales
              no funcionó la solución planteada.
            </p>

            <p className="mb-4">
              Reutilizar:
              Cuando se tiene un determinado grado de experiencia, se puede
              buscar similitudes entre el problema planteado y otros problemas
              resueltos previamente, de tal manera que con pequeñas
              modificaciones se pueda adaptar a las necesidades del nuevo
              problema, encontrando así una solución satisfactoria.
            </p>

          </li>

          <li>
            <strong className="mr-2">
              2.Dividir y Conquistar:
            </strong>

            <p className="mb-4">
              Descomponer un problema en dos o más subproblemas de
              complejidad menor al problema inicial, y así sucesivamente
              descomponer cada subproblema hasta llegar a problemas de
              solución simple, trivial o previamente conocida.
            </p>

            <p className="mb-4">
              Una vez encontradas las soluciones a todos los subproblemas en
              los cuales se descompuso el problema inicial, se procede a
              integrar cada una de las soluciones parciales de tal manera
              que permitan llegar a la solución total del problema.
            </p>

            <p className="mb-4">
              Cuando un problema se divide en dos o más subproblemas, no
              implica que cada uno de ellos se deba resolver bajo el mismo
              método, siendo posible aplicar otro esquema de solución de tal
              forma que solucione el problema.
            </p>
          </li>
          <li>
            <strong className="mr-2">
              3. Ensayo y Error:
            </strong>

            <p className="mb-4">
              Se usa cuando no puede aplicar una técnica sistemática para
              solucionar el problema.

              Se basa en aprovechar la información que se tiene previamente,
              las soluciones similares, los hechos y la lógica, para lanzar una
              posible solución y tratar de acomodarla al problema planteado.
            </p>
          </li>
        </ol>

        <Video videoId="_aGAmMX7KkA">
          
        </Video>

        <p className="mt-4 mb-4" > 

          Si lo requieres, activa los subtítulos generados automáticamente para el siguiente video:
        </p>

        <Video videoId="UiYXwUg23Yw"></Video> 
        <p className="mt-5">Preparate para la siguiente sección con el siguiente video:

        </p>
        <Video videoId="U3CGMyjzlvM"></Video>
      </section>
    </>),
};
