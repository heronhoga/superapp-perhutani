"use client"

import type React from "react"

import { useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const schema = z.object({
  identifier: z.string().min(3, "Masukkan NPK atau Email yang valid"),
  password: z.string().min(6, "Kata sandi minimal 6 karakter"),
})

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)
    const identifier = String(formData.get("identifier") || "")
    const password = String(formData.get("password") || "")

    const parsed = schema.safeParse({ identifier, password })
    if (!parsed.success) {
      setError(parsed.error.errors[0]?.message ?? "Data tidak valid")
      return
    }

    setLoading(true)
    try {
      // Mock submit: ganti dengan integrasi auth nanti
      await new Promise((r) => setTimeout(r, 900))
      // eslint-disable-next-line no-console
      console.log("[v0] Login mock:", { identifier, password: "******" })
      alert("Berhasil login (mock). Tambahkan integrasi autentikasi sesuai kebutuhan.")
    } catch {
      setError("Terjadi kesalahan. Coba lagi.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Masuk ke Perhutanione</CardTitle>
        <CardDescription className="text-muted-foreground">
          Gunakan NPK atau Email beserta kata sandi Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="identifier">NPK atau Email</Label>
            <Input
              id="identifier"
              name="identifier"
              placeholder="contoh: 123456 / nama@perhutani.go.id"
              inputMode="email"
              autoComplete="username"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Kata Sandi</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Masukkan kata sandi"
              autoComplete="current-password"
              required
            />
          </div>

          {error ? (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}

          <Button type="submit" disabled={loading}>
            {loading ? "Memproses..." : "Masuk"}
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          Dengan masuk, Anda menyetujui ketentuan penggunaan dan kebijakan privasi.
        </p>
      </CardContent>
    </Card>
  )
}
