import { SiteHeader } from "@/components/site-header"
import { LandingHero } from "@/components/landing-hero"
import { FeatureSection } from "@/components/feature-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <LandingHero />
      <section id="tentang" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Tentang Perhutanione</h2>
        <p className="mt-2 text-muted-foreground">
          Perhutanione adalah superapp yang membantu tim Perhutani mengelola hutan secara modern, efisien, dan
          berkelanjutan—dari kantor hingga lapangan.
        </p>
        <div className="mt-6 rounded-lg border bg-secondary p-4">
          <p className="text-sm text-muted-foreground">
            Ini adalah mockup untuk keperluan presentasi/konsep. Integrasi data dan autentikasi dapat ditambahkan
            kemudian sesuai kebutuhan.
          </p>
        </div>
      </section>
      <FeatureSection />
      <Footer />
    </main>
  )
}
