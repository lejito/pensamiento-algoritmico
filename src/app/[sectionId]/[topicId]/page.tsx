"use client";
import { useParams } from "next/navigation";
import { structure } from "@/utils/structure";
import NotFoundPage from "@/app/not-found";
import { PageBody } from "@/components/layouts/PageBody";
import { PageHeader } from "@/components/layouts/PageHeader";

export default function TopicPage() {
  const { sectionId, topicId } = useParams<{
    sectionId: string;
    topicId: string;
  }>();

  const section = structure.find((s) => s.id === sectionId);
  const topic = section?.topics.find((t) => t.id === topicId);

  if (!section || !topic) {
    return NotFoundPage();
  }

  return (
    <>
      <PageHeader title={topic.title} section={section.title} />

      <PageBody>{topic.content}</PageBody>
    </>
  );
}
