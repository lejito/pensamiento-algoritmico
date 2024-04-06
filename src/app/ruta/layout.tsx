import { Header } from "@/components/Header";
import { Aside } from "@/components/Aside";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-100 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 min-w-screen min-h-screen">
        <Aside />
        <main className="lg:pl-80 pt-10">
          {children}
        </main>
      </div>
    </div>
  );
}
