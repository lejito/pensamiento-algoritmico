export function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <figure className="max-w-screen-md mx-auto my-6 text-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 mx-auto mb-2 text-gray-400 dark:text-gray-600"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
      </svg>
      <blockquote>
        <p className="text-lg not-italic font-normal">&quot;{children}&quot;</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-3 space-x-3 rtl:space-x-reverse">
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700 italic">
          <cite className="pe-3 text-sm sm:text-lg font-medium">
            Enciclopedia Significados
          </cite>
          <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="https://www.significados.com/logica/"
              target="_blank"
              className="hover:underline"
            >
              significados.com
            </a>
          </cite>
        </div>
      </figcaption>
    </figure>
  );
}
