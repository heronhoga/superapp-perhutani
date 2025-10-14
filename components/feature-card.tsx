import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon?: React.ReactNode
}) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="h-9 w-9 rounded-md bg-primary/15 flex items-center justify-center text-primary">
          {icon ?? <span className="sr-only">Ikon</span>}
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
