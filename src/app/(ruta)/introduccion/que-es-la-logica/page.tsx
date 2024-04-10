import { Blockquote } from "@/components/Blockquote";
import { PageBody } from "@/components/PageBody";
import { PageHeader } from "@/components/PageHeader";
import { Metadata } from "next";

const title = "¿Qué es la lógica?";
const section = "Introducción";

export const metadata: Metadata = {
  title: `${section}: ${title} | Pensamiento Algorítmico`,
};

export default function QueEsLaLogicaPage() {
  return (
    <>
      <PageHeader title={title} section={section} />

      <PageBody>
        <p>
          Antes de comenzar a resolver problemas e implementar algoritmos, es
          importante entender qué es la lógica y cómo se aplica en la resolución
          de problemas.
        </p>

        <Blockquote>
          La lógica es una ciencia formal que estudia la estructura o formas del
          pensamiento humano (como proposiciones, conceptos y razonamientos)
          para establecer leyes y principios válidos con el objetivo de obtener
          criterios de verdad.
        </Blockquote>
      </PageBody>
    </>
  );
}
