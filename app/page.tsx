import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatioControl } from "@/components/aspect-ratio-control"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 max-w-screen-lg">
      <Card>
        <CardHeader>
          <CardTitle>shadcn/ui AspectRatio Playground</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatioControl />
        </CardContent>
      </Card>
    </section>
  )
}
