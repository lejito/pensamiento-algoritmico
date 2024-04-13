"use client";
import { useParams } from "next/navigation";
import { sections } from "@/utils/sections";
import NotFoundPage from "@/app/not-found";
import { PageBody } from "@/components/layouts/PageBody";
import { PageHeader } from "@/components/layouts/PageHeader";

export default function TopicPage() {
  const { sectionId, topicId } = useParams<{
    sectionId: string;
    topicId: string;
  }>();

  const section = sections.find((s) => s.id === sectionId);
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
