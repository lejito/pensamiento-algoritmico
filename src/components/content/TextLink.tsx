export function TextLink({ text, link }: { text: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 underline transition-all duration-200">
      {text}
    </a>
  );
}
