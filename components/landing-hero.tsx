import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingHero() {
  return (
    <section className="w-full bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-balance text-3xl md:text-5xl font-semibold">Perhutanione</h1>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Satu aplikasi untuk operasional Perhutani: monitoring kawasan, pelaporan, perizinan, dan kolaborasi
            lapangan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/login">
              <Button size="lg">Masuk Sekarang</Button>
            </Link>
            <a href="#fitur" className="text-sm md:text-base text-foreground underline underline-offset-4">
              Lihat Fitur
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-lg border bg-card p-2">
            <img
              src="/perhutani.png"
              alt="Ilustrasi dashboard Perhutanione"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div className="mt-3 text-xs text-muted-foreground">Ilustrasi mockup. Bukan data sebenarnya.</div>
        </div>
      </div>
    </section>
  )
}
