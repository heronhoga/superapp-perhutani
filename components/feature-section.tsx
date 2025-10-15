import { FeatureCard } from "./feature-card"
import { Activity, FileText, ShieldCheck, Map, Users, Database } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="fitur" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Fitur Utama</h2>
        <p className="mt-2 text-muted-foreground">Dirancang untuk kebutuhan operasional kehutanan yang kompleks.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Monitoring Kawasan"
            description="Pantau kondisi hutan, tutupan lahan, dan aktivitas lapangan secara berkala."
            icon={<Activity className="h-5 w-5" aria-hidden />}
          />
          <FeatureCard
            title="Pelaporan Cepat"
            description="Buat laporan harian, insiden, dan progres pekerjaan langsung dari lokasi."
            icon={<FileText className="h-5 w-5" aria-hidden />}
          />
          <FeatureCard
            title="Perizinan Terpadu"
            description="Kelola perizinan pemanfaatan hasil hutan dengan alur yang transparan."
            icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
          />
          <FeatureCard
            title="Pemetaan Interaktif"
            description="Lihat peta interaktif untuk blok, petak, dan aksesibilitas wilayah."
            icon={<Map className="h-5 w-5" aria-hidden />}
          />
          <FeatureCard
            title="Kolaborasi Tim"
            description="Komunikasi lintas unit, tugaskan pekerjaan, dan tinjau hasil."
            icon={<Users className="h-5 w-5" aria-hidden />}
          />
          <FeatureCard
            title="Integrasi Data"
            description="Sinkron dengan sistem internal untuk data yang konsisten dan akurat."
            icon={<Database className="h-5 w-5" aria-hidden />}
          />
        </div>
      </div>
    </section>
  )
}
