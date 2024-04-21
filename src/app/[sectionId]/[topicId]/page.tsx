import { structure } from "@/utils/structure";
import NotFoundPage from "@/app/not-found";
import { PageBody } from "@/components/layouts/PageBody";
import { PageHeader } from "@/components/layouts/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {};

export default function TopicPage({
  params,
}: {
  params: { sectionId: string; topicId: string };
}) {
  const { sectionId, topicId } = params;

  const section = structure.find((s) => s.id === sectionId);
  const topic = section?.topics.find((t) => t.id === topicId);

  if (!section || !topic) {
    return <NotFoundPage />;
  }

  metadata.title = `${section.title}: ${topic.title} | Pensamiento Algorítmico`;

  return (
    <>
      <PageHeader title={topic.title} section={section.title} />

      <PageBody>{topic.content}</PageBody>
    </>
  );
}
