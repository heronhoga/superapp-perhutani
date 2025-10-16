import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingHero() {
  return (
    <section className="w-full bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-balance text-3xl md:text-5xl font-semibold">
            OnePerhutani
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
            Platform terpadu Perhutani yang menghubungkan layanan internal,
            publik, dan sosial dalam satu ekosistem digital. OnePerhutani hadir
            untuk meningkatkan efisiensi operasional, transparansi pengelolaan
            hutan, serta memperkuat kolaborasi antara Perhutani dan masyarakat.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link href="/login">
              <Button size="lg">Masuk Sekarang</Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-lg border bg-card p-2">
            <img
              src="/perhutani.png"
              alt="Ilustrasi dashboard OnePerhutani"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
