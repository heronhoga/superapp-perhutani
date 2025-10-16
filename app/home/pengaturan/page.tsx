import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export default function PengaturanPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-balance">Pengaturan</h1>
          <p className="mt-2 text-muted-foreground">
            Kelola preferensi aplikasi dan akun Anda. Ini adalah tampilan mockup (frontend saja).
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border p-4">
            <h2 className="font-medium">Preferensi Aplikasi</h2>
            <p className="text-sm text-muted-foreground">Tema, bahasa, dan notifikasi.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="font-medium">Keamanan</h2>
            <p className="text-sm text-muted-foreground">Kata sandi, sesi, dan kontrol akses (simulasi).</p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="font-medium">Integrasi</h2>
            <p className="text-sm text-muted-foreground">Sambungkan layanan internal (mock).</p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/home" className="text-sm text-primary hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
