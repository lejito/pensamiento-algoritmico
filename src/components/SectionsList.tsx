import { sections } from "@/utils/sections";
import Image from "next/image";
import Link from "next/link";

export function SectionsList() {
  return (
    <ul className="flex flex-wrap w-full pt-8 pb-16 px-10 text-center justify-center bg-slate-100 dark:bg-transparent">
      {sections.map((section) => (
        <li
          key={sections.indexOf(section) + 1}
          className="flex basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2"
        >
          <Link
            href={
              "/ruta" + section.href + (section.pages && section.pages[0]?.href)
            }
            className="flex flex-col bg-white dark:bg-slate-700 dark:text-white rounded-md hover:-translate-y-1 hover:shadow-lg transition-all items-center p-4"
          >
            <div className="relative h-60 w-full">
              <Image
                src={section.image}
                alt={section.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="my-2 text-xl font-medium">{section.title}</h2>
            <p className="text-slate-500 dark:text-slate-400">
              {section.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
