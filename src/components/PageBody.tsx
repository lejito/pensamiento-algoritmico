export function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 text-base sm:text-lg text-slate-800 dark:text-slate-300">
      {children}
    </div>
  );
}
