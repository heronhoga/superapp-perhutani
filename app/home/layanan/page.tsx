import Link from "next/link"
import { FileText, Users2, Leaf, HandHeart, Megaphone, PhoneCall } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function LayananPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                <FileText className="h-4 w-4" aria-hidden />
              </span>
              Layanan Publik & Sosial
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Mempermudah masyarakat mengakses informasi, program kemitraan, kegiatan konservasi,
              serta pelaporan partisipatif untuk pengelolaan hutan berkelanjutan.
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
          {/* Informasi & Pengumuman */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <Megaphone className="text-primary" />
              <h2 className="font-semibold text-lg">Informasi & Pengumuman</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Dapatkan pengumuman resmi, jadwal kegiatan sosial, dan edukasi publik terkait hutan dan konservasi.
            </p>
          </div>

          {/* Pelaporan Masyarakat */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <PhoneCall className="text-primary" />
              <h2 className="font-semibold text-lg">Pelaporan Masyarakat</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Fasilitasi pelaporan partisipatif terkait aktivitas hutan, kebakaran, penebangan liar, atau kegiatan sosial.
              Laporan akan diteruskan ke unit Perhutani terdekat.
            </p>
          </div>

          {/* Program Kemitraan */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <Users2 className="text-primary" />
              <h2 className="font-semibold text-lg">Program Kemitraan</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Bangun kolaborasi antara Perhutani, masyarakat desa hutan, dan sektor swasta dalam pengelolaan hasil hutan non-kayu.
            </p>
          </div>

          {/* Kegiatan Konservasi */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <Leaf className="text-primary" />
              <h2 className="font-semibold text-lg">Kegiatan Konservasi</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Ikuti kegiatan penghijauan, penanaman pohon, dan restorasi ekosistem hutan yang terbuka bagi relawan.
            </p>
          </div>

          {/* Layanan Relawan Sosial */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <HandHeart className="text-primary" />
              <h2 className="font-semibold text-lg">Layanan Relawan Sosial</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Daftar menjadi relawan untuk kegiatan sosial, edukasi lingkungan, dan pemberdayaan masyarakat sekitar hutan.
            </p>
          </div>

          {/* Edukasi & Sosialisasi */}
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <FileText className="text-primary" />
              <h2 className="font-semibold text-lg">Edukasi & Sosialisasi</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Akses materi edukatif tentang kehutanan, peraturan lingkungan, dan tata kelola sumber daya alam yang lestari.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-muted-foreground max-w-2xl">
            Layanan publik ini menjadi jembatan antara Perhutani dan masyarakat — mewujudkan kolaborasi,
            transparansi, dan kepedulian terhadap hutan Indonesia.
          </p>
          <Link href="/layanan/pelaporan">
            <Button className="mt-4">Laporkan Aktivitas atau Daftar Relawan</Button>
          </Link>
        </div>

        {/* Mobile Back Button */}
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
