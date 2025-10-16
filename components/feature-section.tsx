import { FeatureCard } from "./feature-card";
import {
  Activity,
  FileText,
  ShieldCheck,
  Map,
  Users,
  Database,
} from "lucide-react";

export function FeatureSection() {
  return (
    <section id="fitur" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">
          Fitur Utama
        </h2>
        <p className="mt-2 text-muted-foreground">
          Dirancang untuk kebutuhan operasional kehutanan yang kompleks.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Operasional Internal"
            description="Mendukung aktivitas operasional harian Perhutani secara digital, mulai dari manajemen sumber daya hutan, pemantauan lapangan, hingga koordinasi antarunit agar proses kerja menjadi lebih efisien dan transparan."
            icon={<Activity className="h-5 w-5" aria-hidden />}
          />

          <FeatureCard
            title="Layanan Publik & Sosial"
            description="Mempermudah masyarakat untuk mengakses informasi, layanan, serta kegiatan sosial Perhutani, termasuk program kemitraan, kegiatan konservasi, dan pelaporan partisipatif dari publik."
            icon={<FileText className="h-5 w-5" aria-hidden />}
          />

          <FeatureCard
            title="Administrasi & Pelaporan"
            description="Memfasilitasi pengelolaan administrasi dan pelaporan secara terintegrasi, memungkinkan pengumpulan data yang akurat, pelacakan kinerja, dan penyusunan laporan yang cepat serta akuntabel."
            icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
          />
        </div>
      </div>
    </section>
  );
}
