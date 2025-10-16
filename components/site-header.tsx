"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isApp = pathname?.startsWith("/home");

  return (
    <header className="w-full border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <img
            src="/oneperhutani.jpg"
            alt="Logo Perhutanione"
            className="h-6 w-6"
          />
          <span className="font-semibold">OnePerhutani</span>
        </Link>

        {!isApp && (
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#fitur"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fitur
            </Link>
            <Link
              href="#tentang"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Tentang
            </Link>
          </nav>
        )}

        {!isApp && (
          <div className="flex items-center gap-3">
            <Link href="/login" aria-label="Buka halaman masuk">
              <Button variant="default" className="min-w-24">
                Masuk
              </Button>
            </Link>
          </div>
        )}

        {isApp && (
          <div className="flex items-center gap-3">
            <Link href="/login" aria-label="Buka halaman masuk">
              <Button variant="destructive" className="min-w-24">
                Keluar
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
