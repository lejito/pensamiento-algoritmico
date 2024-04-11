"use client";
import { useParams } from "next/navigation";
import { sections } from "@/utils/sections";
import NotFoundPage from "../not-found";
import { PageBody } from "@/components/PageBody";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import { TopicsList } from "@/components/TopicsList";

export default function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>();

  const section = sections.find((s) => s.id === sectionId);

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
