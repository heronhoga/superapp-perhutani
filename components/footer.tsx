export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-4 md:grid-cols-3">
        <div>
          <p className="font-semibold">OnePerhutani</p>
          <p className="text-sm text-muted-foreground">
            Superapp untuk pengelolaan hutan berkelanjutan.
          </p>
        </div>
        <div>
          <p className="font-semibold">Perusahaan</p>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                className="text-sm text-muted-foreground hover:text-foreground"
                href="#tentang"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                className="text-sm text-muted-foreground hover:text-foreground"
                href="#fitur"
              >
                Fitur
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Kontak</p>
          <p className="text-sm text-muted-foreground">
            support@oneperhutani.app
          </p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        Kelompok 6 START Program Perhutani 2025
      </div>
    </footer>
  );
}
