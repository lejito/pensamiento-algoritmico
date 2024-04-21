import { structure } from "@/utils/structure";
import NotFoundPage from "../not-found";
import { PageBody } from "@/components/layouts/PageBody";
import { PageHeader } from "@/components/layouts/PageHeader";
import { TopicsList } from "@/components/layouts/TopicsList";
import { Metadata } from "next";

export const metadata: Metadata = {};

export default function SectionPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const { sectionId } = params;

  const section = structure.find((s) => s.id === sectionId);

  if (!section) {
    return <NotFoundPage />;
  }

  metadata.title = `${section.title} | Pensamiento Algorítmico`;

  return (
    <>
      <PageHeader title={section.title} />

      <PageBody>
        {section.content}

        <TopicsList section={section} />
      </PageBody>
    </>
  );
}
