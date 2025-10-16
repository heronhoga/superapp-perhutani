import Link from "next/link";
import { ShieldCheck, FileText, FolderArchive, BarChart3, ClipboardList, Users2, CloudUpload } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function AdministrasiPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                <ShieldCheck className="h-4 w-4" aria-hidden />
              </span>
              Administrasi & Pelaporan
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Pusat pengelolaan data dan pelaporan internal Perhutani yang
              mendukung tata kelola digital: efisien, transparan, dan akuntabel.
            </p>
          </div>
          <div className="hidden md:block">
            <Link href="/home">
              <Button variant="outline">Kembali ke Beranda</Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <FolderArchive className="text-primary" />
              <h2 className="font-semibold text-lg">Dokumentasi & Arsip</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Kelola dokumen resmi, surat, dan arsip kegiatan secara digital.
              Fitur pencarian cepat, tagging dokumen, dan pengaturan izin akses.
            </p>
          </div>

          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <FileText className="text-primary" />
              <h2 className="font-semibold text-lg">Pelaporan Kinerja</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Buat dan kirim laporan kegiatan, monitoring KPI, dan evaluasi
              hasil kerja tiap unit dengan dashboard yang informatif.
            </p>
          </div>

          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <ClipboardList className="text-primary" />
              <h2 className="font-semibold text-lg">Manajemen Tugas</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Catat dan pantau progres tugas harian, status pekerjaan, serta
              penanggung jawab tiap kegiatan lapangan.
            </p>
          </div>

          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <Users2 className="text-primary" />
              <h2 className="font-semibold text-lg">Absensi & Kegiatan</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Rekam kehadiran petugas, laporan kegiatan lapangan, serta
              integrasi dengan sistem kepegawaian digital Perhutani.
            </p>
          </div>

          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <BarChart3 className="text-primary" />
              <h2 className="font-semibold text-lg">Analisis Data</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Analisis kinerja dan pelaporan otomatis dengan grafik interaktif.
              Data real-time dari unit kerja untuk pengambilan keputusan cepat.
            </p>
          </div>

          <div className="rounded-lg border p-5 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <CloudUpload className="text-primary" />
              <h2 className="font-semibold text-lg">Integrasi Cloud</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Penyimpanan dokumen dan laporan di cloud internal untuk menjaga
              keamanan, sinkronisasi, dan akses lintas perangkat.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-muted-foreground max-w-2xl">
            Sistem administrasi ini dirancang untuk mendukung transformasi
            digital Perhutani menuju pengelolaan hutan yang modern dan
            transparan.
          </p>
          <Link href="/dashboard">
            <Button className="mt-4">Masuk ke Dashboard Pelaporan</Button>
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
  );
}
