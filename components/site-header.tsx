"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <img src="/perhutanionelogo.png" alt="Logo Perhutanione" className="h-6 w-6" />
          <span className="font-semibold">Perhutanione</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#fitur" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Fitur
          </Link>
          <Link href="#tentang" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Tentang
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="default" className="min-w-24">
              Masuk
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
