import Link from "next/link"
import { FileText } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function LayananPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                <FileText className="h-4 w-4" aria-hidden />
              </span>
              Layanan Publik & Sosial
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Mempermudah masyarakat mengakses informasi, program kemitraan, kegiatan konservasi, dan pelaporan
              partisipatif.
            </p>
          </div>
          <div className="hidden md:block">
            <Link href="/home">
              <Button variant="outline">Kembali ke Beranda</Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h2 className="font-semibold">Informasi & Pengumuman</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Sampaikan pengumuman, jadwal kegiatan, dan materi sosialisasi ke publik.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="font-semibold">Pelaporan Masyarakat</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Terima laporan partisipatif dari publik dan tindak lanjuti secara terstruktur.
            </p>
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <Link href="/home">
            <Button variant="outline" className="w-full bg-transparent">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
