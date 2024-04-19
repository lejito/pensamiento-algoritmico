import Image from "next/image";
import { Topic } from "@/utils/models/Topic";
import { Blockquote } from "@/components/content/Blockquote";
import { Question } from "@/components/content/Question";
import { Video } from "@/components/content/Video";

export const queEsLaLogica: Topic = {
  id: "que-es-la-logica",
  title: "¿Qué es la lógica?",
  description: "Conceptos básicos de la lógica y su aplicación.",
  content: (
    <>
      <section>
        <p>
          Antes de comenzar a resolver problemas e implementar algoritmos, es
          importante entender qué es la lógica y cómo se aplica en la resolución
          de problemas. Una definición simple de lógica es:
        </p>

        <Blockquote
          author="Enciclopedia Significados"
          url="https://www.significados.com/logica/"
        >
          La lógica es una ciencia formal que estudia la estructura o formas del
          pensamiento humano (como proposiciones, conceptos y razonamientos)
          para establecer leyes y principios válidos con el objetivo de obtener
          criterios de verdad.
        </Blockquote>

        <p className="">
          En palabras más sencillas, la lógica es la manera más{" "}
          <strong>fácil</strong> y <strong>obvia</strong> de hacer cualquier
          cosa. La lógica se aplica en la resolución de problemas a través de la
          identificación de problemas, la formulación de hipótesis y soluciones,
          la evaluación de alternativas y la toma de decisiones basadas en la
          información disponible.
        </p>

        <Question
          id="s1t1q1"
          type="short-answer"
          title="Ejercicio 1"
          question="Observa una serie de operaciones o números y trata de identificar la lógica detrás de ellos. Por ejemplo, ¿qué patrón sigue esta secuencia? 2, 4, 8, 16, …"
          answer="32"
          feedback="La lógica detrás de esta secuencia es que cada número es el doble del anterior. Por lo tanto, el siguiente número en la secuencia es 32."
        />

        <Question
          id="s1t1q2"
          type="one-choice"
          title="Ejercicio 2"
          question="Si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, ¿habla Ángela más alto o más bajo que Celia?"
          answer="Más bajo"
          options={["Más alto", "Más bajo"]}
          feedback="La lógica detrás de esta pregunta es que si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, entonces el orden de volumen sería: Celia > Rosa > Ángela, por lo que Ángela habla más bajo que Celia."
        />

        <Question
          id="s1t1q3"
          type="short-answer"
          title="Ejercicio 3"
          question="La nota media conseguida en una clase de 20 alumnos ha sido de 6. Ocho alumnos han suspendido con un 3 y el resto superó el 5. ¿Cuál es la nota media de los alumnos aprobados?"
          answer="8"
          feedback="Hay que recordar que la media es igual a la suma de los valores dividida entre la cantidad de valores (media = suma / cantidad), y de forma similar, la suma de los valores es igual a la media multiplicada por la cantidad de valores (suma = media * cantidad). En este caso, la suma de todas las notas es 20 * 6 = 120, y la suma de las notas de los alumnos suspendidos es 8 * 3 = 24. Por lo tanto, la suma de las notas de los alumnos aprobados es 120 - 24 = 96, y como hay 12 alumnos aprobados, la nota media de los alumnos aprobados es 96 / 12 = 8."
        />
      </section>

      <section className="mt-12">
        <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 mb-2">
          Lógica de programación
        </h2>

        <p>
          La lógica de programación es la aplicación de la lógica en la
          resolución de problemas de manera sistemática, estructurada y
          ordenada. Una definición más orientada a campo de la informática es:
        </p>

        <Blockquote
          author="OpenWebinars"
          url="https://openwebinars.net/blog/aprende-mejorar-tu-logica-de-programacion/"
        >
          La lógica de programación consiste en la organización y planificación
          coherente de las instrucciones necesarias para ejecutar con éxito un
          programa.
        </Blockquote>
        
        <p>
          Piensa en cómo se resuelve un problema en la vida real. Si tienes que
          ir a comprar algo, primero piensas en qué necesitas, luego decides a
          dónde ir, cómo llegar allí, qué comprar, cómo pagar, etc. Todo esto es
          parte de la lógica de resolución de problemas. En programación, es lo
          mismo, pero con instrucciones que una computadora puede entender y
          ejecutar.
        </p>

        <p className="pt-8">
          Para contextualizar un poco con un problema cotidiano, tomemos el
          ejemplo de una receta de cocina. Una receta de cocina es un conjunto
          de instrucciones que debes seguir para preparar un plato. Si sigues
          las instrucciones paso a paso, obtendrás el plato deseado. ¿Qué tal un
          paso a paso de cómo preparar un sencillo sándwich de jamón y queso?
          Vamos a ello:
        </p>

        <ol className="list-decimal list-inside pl-4 mt-4 font-bold">
          <li className="mb-6">
            Corta dos rebanadas de pan.
            <Image
              src="/preparar-sandwich-1.jpg"
              alt="Rebanadas de pan"
              width={192}
              height={192}
              className="mt-2 rounded-md"
            />
          </li>
          <li className="mb-1">
            Coloca una rebanada de jamón en una de las rebanadas de pan.
            <Image
              src="/preparar-sandwich-2.png"
              alt="Rebanada de jamón"
              width={222}
              height={222}
              className="mt-2 rounded-md"
            />
          </li>
          <li className="mb-2">
            Coloca una rebanada de queso en la otra rebanada de pan.
            <Image
              src="/preparar-sandwich-3.png"
              alt="Rebanadas de queso"
              width={216}
              height={201.6}
              className="mt-2 rounded-md"
            />
          </li>
          <li className="mb-6">
            Junta las dos rebanadas para formar el sándwich.
            <Image
              src="/preparar-sandwich-4.webp"
              alt="Rebanadas de queso"
              width={233.3}
              height={135.3}
              className="mt-2 rounded-md"
            />
          </li>
          <li>
            ¡Disfruta tu sándwich de jamón y queso!
            <Image
              src="/preparar-sandwich-5.png"
              alt="Rebanadas de queso"
              width={233.3}
              height={135.3}
              className="mt-2 rounded-md"
            />
          </li>
        </ol>

        <p className="pt-8">
          Si bien la preparación de un sándwich es un ejemplo simple, la lógica
          detrás de la receta es la misma que se aplica en la programación. ¿Qué
          pasa si por error colocas el jamón y el queso al revés? ¿O si olvidas
          un ingrediente? ¿O si no sigues los pasos en el orden correcto? Todo
          esto afectará el resultado final. El nivel de detalle y complejidad de
          las instrucciones dependerá del problema a resolver y de la solución
          propuesta.
        </p>

        <p className="pt-6">
          La lógica de programación es fundamental para cualquier persona y no
          solo para programadores. La lógica de programación te ayuda a pensar
          de forma estructurada, a descomponer problemas complejos en partes más
          pequeñas y manejables, y a desarrollar soluciones efectivas y
          eficientes. Repasa y apóyate del siguiente video de{" "}
          <a
            href="https://www.youtube.com/@academiaprogramacion"
            target="_blank"
            className="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 underline transition-all duration-200"
          >
            Academia de Programación
          </a>{" "}
          para afianzar conceptos y conocimientos sobre la lógica de
          programación:
        </p>

        <Video videoId="EjV2LxEdz0c" />
      </section>
    </>
  ),
};
