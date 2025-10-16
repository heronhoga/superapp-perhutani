import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export default function ProfilPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-balance">Profil</h1>
          <p className="mt-2 text-muted-foreground">
            Lihat dan kelola informasi pribadi Anda. Ini adalah tampilan mockup (frontend saja).
          </p>
        </div>

        <div className="rounded-lg border">
          <div className="p-4 border-b">
            <h2 className="font-medium">Informasi Akun</h2>
            <p className="text-sm text-muted-foreground">Nama, NPK/Email, unit kerja.</p>
          </div>
          <div className="p-4 border-b">
            <h2 className="font-medium">Kontak</h2>
            <p className="text-sm text-muted-foreground">Nomor telepon dan alamat kantor.</p>
          </div>
          <div className="p-4">
            <h2 className="font-medium">Preferensi</h2>
            <p className="text-sm text-muted-foreground">Bahasa, format tanggal, zona waktu.</p>
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
