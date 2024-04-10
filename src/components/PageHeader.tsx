export function PageHeader({
  title,
  section,
}: {
  title: string;
  section?: string;
}) {
  return (
    <header id="header" className="relative z-20 mb-4">
      {section && (
        <p className="mb-2 text-sm sm:text-base leading-6 font-semibold text-sky-500 dark:text-sky-400">
          {section}
        </p>
      )}
      <div className="flex items-center">
        <h1
          className={`inline-block text-2xl sm:text-3xl font-extrabold tracking-tight ${
            section
              ? "text-slate-900 dark:text-slate-200"
              : "text-sky-500 dark:text-sky-400"
          }`}
        >
          {title}
        </h1>
      </div>
    </header>
  );
}
