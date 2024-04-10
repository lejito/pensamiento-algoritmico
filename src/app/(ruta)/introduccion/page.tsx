import { PageBody } from "@/components/PageBody";
import { PageHeader } from "@/components/PageHeader";
import { Metadata } from "next";

const title = "Introducción";

export const metadata: Metadata = {
  title: `${title} | Pensamiento Algorítmico`,
};

export default function QueEsLaLogicaPage() {
  return (
    <div>
      <PageHeader title={title} />

      <PageBody>
        <p>
          En esta sección aprenderás los conceptos básicos de la lógica, los
          cuales son fundamentales para la resolución de problemas y la
          implementación de algoritmos.
        </p>
      </PageBody>
    </div>
  );
}
