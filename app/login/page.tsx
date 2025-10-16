import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">Masuk</h1>
          <p className="mt-2 text-muted-foreground">Akses fitur operasional OnePerhutani dengan akun Anda.</p>
        </div>
        <div className="mt-8">
          <LoginForm />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <span>Belum punya akun? </span>
            <Link href="/" className="text-foreground underline underline-offset-4">
              Pelajari OnePerhutani
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
