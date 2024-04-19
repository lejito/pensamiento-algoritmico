"use client";
import { useParams } from "next/navigation";
import { structure } from "@/utils/structure";
import NotFoundPage from "../not-found";
import { PageBody } from "@/components/layouts/PageBody";
import { PageHeader } from "@/components/layouts/PageHeader";
import { TopicsList } from "@/components/layouts/TopicsList";

export default function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>();

  const section = structure.find((s) => s.id === sectionId);

  if (!section) {
    return NotFoundPage();
  }

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
