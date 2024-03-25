export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>NAV</nav>

      <main>{children}</main>
    </>
  );
}
