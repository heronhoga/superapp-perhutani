import { FeatureCard } from "./feature-card"

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
          />
          <FeatureCard
            title="Pelaporan Cepat"
            description="Buat laporan harian, insiden, dan progres pekerjaan langsung dari lokasi."
          />
          <FeatureCard
            title="Perizinan Terpadu"
            description="Kelola perizinan pemanfaatan hasil hutan dengan alur yang transparan."
          />
          <FeatureCard
            title="Pemetaan Interaktif"
            description="Lihat peta interaktif untuk blok, petak, dan aksesibilitas wilayah."
          />
          <FeatureCard
            title="Kolaborasi Tim"
            description="Komunikasi lintas unit, tugaskan pekerjaan, dan tinjau hasil."
          />
          <FeatureCard
            title="Integrasi Data"
            description="Sinkron dengan sistem internal untuk data yang konsisten dan akurat."
          />
        </div>
      </div>
    </section>
  )
}
