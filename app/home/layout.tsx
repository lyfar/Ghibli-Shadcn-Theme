import Link from "next/link"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-2xl text-primary">ZFX</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Back to Components
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
} 