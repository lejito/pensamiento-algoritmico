import { structure } from "@/utils/structure";
import Image from "next/image";
import Link from "next/link";

export function SectionsList() {
  return (
    <ul className="flex flex-wrap w-full pt-8 pb-16 px-10 text-center justify-center items-center bg-slate-100 dark:bg-transparent">
      {structure.map((section) => (
        <li
          key={structure.indexOf(section) + 1}
          className="flex basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2"
        >
          <Link
            href={`/${section.id}`}
            className="w-full flex flex-col bg-white dark:bg-slate-700 dark:text-white rounded-md border border-slate-300 dark:border-slate-600 hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all items-center p-4"
          >
            <div className="relative h-60 w-full">
              <Image
                src={section.image.src}
                alt={section.title}
                width={section.image.width}
                height={section.image.height}
                className="w-full h-full object-cover rounded-md"
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
