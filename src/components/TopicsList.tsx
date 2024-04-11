import { Section } from "@/utils/sections";
import Link from "next/link";

export function TopicsList({ section }: { section: Section }) {
  return (
    <ul className="flex flex-wrap w-full pt-8 pb-16 px-10 text-center justify-center bg-slate-100 dark:bg-transparent">
      {section.topics.map((topic) => (
        <li
          key={topic.id}
          className="flex w-full basis-full sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4 p-3"
        >
          <Link
            href={`/${section.id}/${topic.id}`}
            className="flex flex-col justify-between w-full bg-white dark:bg-slate-700 dark:text-white rounded-md hover:-translate-y-1 hover:shadow-lg transition-all items-center px-4 py-6"
          >
            <h2 className="my-2 text-lg sm:text-xl font-medium leading-none">{topic.title}</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              {topic.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
