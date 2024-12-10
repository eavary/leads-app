
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {children}
    </main>
  )
}