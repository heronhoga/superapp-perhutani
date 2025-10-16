import Link from "next/link"
import { Activity, FileText, ShieldCheck, Settings, User2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { FeatureCard } from "@/components/feature-card"

export default function AppHomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-balance">Beranda</h1>
          <p className="mt-2 text-muted-foreground">Selamat datang di Perhutanione. Pilih modul untuk mulai bekerja.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/app/operasional" className="block h-full" aria-label="Buka Operasional Internal">
            <FeatureCard
              title="Operasional Internal"
              description="Aktivitas harian Perhutani: manajemen sumber daya hutan, pemantauan lapangan, koordinasi antarunit."
              icon={<Activity className="h-5 w-5" aria-hidden />}
            />
          </Link>

          <Link href="/app/layanan" className="block h-full" aria-label="Buka Layanan Publik dan Sosial">
            <FeatureCard
              title="Layanan Publik & Sosial"
              description="Akses informasi dan layanan untuk masyarakat: kemitraan, konservasi, pelaporan partisipatif."
              icon={<FileText className="h-5 w-5" aria-hidden />}
            />
          </Link>

          <Link href="/app/administrasi" className="block h-full" aria-label="Buka Administrasi dan Pelaporan">
            <FeatureCard
              title="Administrasi & Pelaporan"
              description="Kelola administrasi dan pelaporan terintegrasi: pengumpulan data, pelacakan kinerja, penyusunan laporan."
              icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
            />
          </Link>

          {/* Kartu Pengaturan */}
          <Link href="/app/pengaturan" className="block h-full" aria-label="Buka Pengaturan">
            <FeatureCard
              title="Pengaturan"
              description="Atur preferensi aplikasi, notifikasi, tema, dan pilihan lainnya."
              icon={<Settings className="h-5 w-5" aria-hidden />}
            />
          </Link>

          {/* Kartu Profil */}
          <Link href="/app/profil" className="block h-full" aria-label="Buka Profil">
            <FeatureCard
              title="Profil"
              description="Lihat informasi akun Anda dan kelola data pribadi."
              icon={<User2 className="h-5 w-5" aria-hidden />}
            />
          </Link>
        </div>
      </section>
    </main>
  )
}
