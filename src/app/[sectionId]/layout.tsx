import { Header } from "@/components/layouts/Header";
import { Aside } from "@/components/layouts/Aside";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <Header />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 min-w-screen min-h-[calc(100vh-4.4rem)]">
        <Aside />
        <main className="p-2 lg:pl-80 pt-10 pb-14 text-left">
          {children}
        </main>
      </div>
    </div>
  );
}
