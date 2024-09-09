import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@modules/ui/card"
import Clutches from "/public/images/C3.jpg"
import Totes from "/public/images/T1.jpg"
import Satchels from "/public/images/S1.jpg"
import Keyring from "/public/images/acc1.jpg"
import Image from "next/image"
import { Button } from "@medusajs/ui"

import Link from "next/link"

const images = [
  {
    id: 1,
    src: Clutches,
    alt: "image",
    href: "/collections/clutches",
    title: "Clutches",
  },
  {
    id: 2,
    src: Keyring,
    alt: "image",
    href: "/collections/keychains",
    title: "Keyring",
  },
  {
    id: 3,
    src: Totes,
    alt: "image",
    href: "/collections/handbags",
    title: "HandBags",
  },
]

export default function MustHaves({ id }: { id: string }) {
  return (
    <section id={id} className="mx-6 flex flex-col gap-4 md:flex-row">
      <Card className="flex w-full basis-1/3 items-center justify-between gap-2 border-none md:flex-col md:items-start md:justify-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Must Haves</span>
          <span className="text-sm text-muted-foreground">
            Bestsellers among our collection
          </span>
        </div>
        <Link href={"/collections"}>
          <Button className="max-w-fit bg-primary">Shop Now</Button>
        </Link>
      </Card>
      <div className="grid grid-cols-2 justify-items-center gap-2 md:grid-cols-3">
        {images.map((image) => (
          <Card className=" " key={image.id}>
            <CardContent className="h-500 p-0">
              <Image src={image.src} width={500} height={500} alt={image.alt} />
            </CardContent>
            <CardFooter className="flex-col items-start gap-4 p-4">
              <span className="text-xl font-bold">{image.title}</span>
              <span className="text-sm text-muted-foreground">
                Bestsellers among our collection
              </span>
              <Link href={image.href}>
                <Button className="bg-primary">Shop Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
