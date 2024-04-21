import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeChanger } from "@/components/layouts/ThemeChanger";
import Head from "next/head";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pensamiento Algorítmico: Ruta de aprendizaje",
  description:
    "Sitio web de la ruta de aprendizaje de la asignatura Pensamiento Algorítmico de la Facultad de Ingenierías de la Universidad de Medellín.",
  authors: [{ name: "Alejandro Córdoba Ríos" }],
  category: "Education",
  keywords: [
    "pensamiento algorítmico",
    "algoritmos",
    "programación",
    "informática",
    "educación",
    "universidad",
    "tecnología",
    "ciencia de la computación",
    "computación",
    "lógica",
    "pensamiento computacional",
    "pensamiento lógico",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <Head>
        <title>jajajaja</title>
        <meta property="og:title" content="jajaajs" key="title" />
      </Head>
      <body
        className={`${redHatDisplay.className} bg-slate-100 antialiased min-w-screen min-h-screen`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <ThemeChanger />
        </ThemeProvider>
      </body>
    </html>
  );
}
