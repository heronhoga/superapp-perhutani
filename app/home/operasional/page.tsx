import Link from "next/link"
import { Activity, ClipboardCheck, MapPin, Truck, Package, Users, BarChart3 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function OperasionalPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Activity className="h-4 w-4" aria-hidden />
              </span>
              Operasional Internal
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Mendukung aktivitas operasional harian Perhutani: manajemen sumber daya hutan,
              pemantauan lapangan, pengawasan hasil hutan, dan koordinasi antarunit.
            </p>
          </div>
          <div className="hidden md:block">
            <Link href="/home">
              <Button variant="outline">Kembali ke Beranda</Button>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Rencana Kerja */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="text-primary" />
              <h2 className="font-semibold text-lg">Rencana Kerja</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Susun dan pantau rencana kerja unit. Bagikan tugas ke petugas lapangan dan pantau progres harian.
            </p>
          </div>

          {/* Pemantauan Lapangan */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" />
              <h2 className="font-semibold text-lg">Pemantauan Lapangan</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Catat hasil inspeksi lapangan, dokumentasikan kondisi hutan dengan foto dan koordinat lokasi,
              bahkan saat offline.
            </p>
          </div>

          {/* Manajemen Logistik */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <Truck className="text-primary" />
              <h2 className="font-semibold text-lg">Manajemen Logistik</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Pantau distribusi alat, kendaraan, dan bahan operasional untuk memastikan kegiatan lapangan berjalan lancar.
            </p>
          </div>

          {/* Inventaris & Aset */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <Package className="text-primary" />
              <h2 className="font-semibold text-lg">Inventaris & Aset</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Kelola data aset hutan, peralatan kerja, dan fasilitas kantor dengan pelacakan status dan kondisi aset.
            </p>
          </div>

          {/* Personel Lapangan */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <Users className="text-primary" />
              <h2 className="font-semibold text-lg">Personel Lapangan</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Atur penugasan, absensi, dan laporan aktivitas harian petugas lapangan secara real-time.
            </p>
          </div>

          {/* Pengawasan Hasil Hutan */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <BarChart3 className="text-primary" />
              <h2 className="font-semibold text-lg">Pengawasan Hasil Hutan</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Monitor hasil panen kayu dan non-kayu, pelaporan volume, serta pemetaan area produksi untuk mencegah penyimpangan.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-muted-foreground max-w-2xl">
            Sistem operasional ini membantu mempercepat koordinasi antarunit, meningkatkan efisiensi lapangan,
            dan memastikan setiap kegiatan berjalan sesuai rencana dan standar kehutanan.
          </p>
          <Link href="/dashboard/operasional">
            <Button className="mt-4">Masuk ke Dashboard Operasional</Button>
          </Link>
        </div>

        {/* Mobile Button */}
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
