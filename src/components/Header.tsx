import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full h-[4.4rem] p-2 flex-none backdrop-blur transition-colors duration-500 bg-slate-100/75 dark:bg-slate-900/75 border-b border-slate-300 dark:border-slate-700">
      <nav className="mx-auto h-full flex justify-between items-center align-middle px-4">
        <div>
          <a className="text-lg font-semibold" href="/">
            <h1 className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-slate-600 to-slate-950 dark:from-slate-50 dark:to-slate-300">
              Pensamiento Algorítmico
            </h1>
          </a>
        </div>
        <div className="flex gap-2">
          <a
            title="UdeMedellín"
            className="opacity-90 hover:opacity-100 hover:bg-blue-100 dark:hover:bg-blue-100/10 py-2 pl-4 pr-5 rounded-full transition-colors"
            href="https://www.udemedellin.edu.co/"
            target="_blank"
          >
            <Image
              className="block dark:hidden"
              src="/logo_udemedellin.png"
              alt="Logo UdeMedellín"
              width={120.75}
              height={37.5}
            />
            <Image
              className="hidden dark:block"
              src="/logo_udemedellin_dark.png"
              alt="Logo UdeMedellín"
              width={120.75}
              height={37.5}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
