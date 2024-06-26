export function Blockquote({
  children,
  author,
  url,
}: {
  children: React.ReactNode;
  author: string;
  url: string;
}) {
  return (
    <figure className="max-w-screen-md mx-auto mt-6 mb-8 text-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 mx-auto mb-2 text-sky-600 dark:text-sky-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
      </svg>
      <blockquote>
        <p className="text-base sm:text-lg not-italic font-normal">
          &quot;{children}&quot;
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-3 space-x-3">
        <div className="flex flex-col md:flex-row items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300 dark:divide-gray-700 italic gap-2 md:gap-0">
          <cite className="md:pe-4 text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
            {author}
          </cite>
          <cite className="md:ps-3 pt-1 md:pt-0 text-sm text-sky-700 dark:text-sky-600">
            <a href={url} target="_blank" className="hover:underline">
              {url}
            </a>
          </cite>
        </div>
      </figcaption>
    </figure>
  );
}
