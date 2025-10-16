import { SiteHeader } from "@/components/site-header";
import { LandingHero } from "@/components/landing-hero";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <LandingHero />
      <section id="tentang" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">
          Tentang OnePerhutani
        </h2>
        <p className="mt-2 text-muted-foreground">
          OnePerhutani adalah superapp yang dirancang untuk mendukung tim
          Perhutani dalam mengelola hutan secara modern, efisien, dan
          berkelanjutan—mulai dari kegiatan operasional di lapangan hingga
          proses administrasi di kantor.
        </p>
      </section>
      <FeatureSection />
      <Footer />
    </main>
  );
}
