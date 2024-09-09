import { Card, CardContent, CardFooter } from "@modules/ui/card"
import blossomImage from "/public/images/blossomClutch1.2.jpg"
import T1 from "/public/images/T1.jpg"
import Image from "next/image"
import Link from "next/link"

const images = [
  { id: 1, src: blossomImage, alt: "image", href: "/products/clutch" },
  { id: 2, src: T1, alt: "image", href: "/products/bag1" },
  // { id: 3, src: image, alt: "image", href: "/product/3" },
  // { id: 4, src: image, alt: "image", href: "/product/4" },
]

export default function HomeFeatured({ id }: { id: string }) {
  return (
    <section id={id} className="mx-6 flex flex-col">
      <div className="my-10 h-5 border-b-2 border-zinc-200 text-center text-2xl">
        <span className="bg-white px-5 font-serif font-semibold">
          Featured Bags
        </span>
      </div>
      <div className="flex flex-wrap justify-around gap-4">
        {/* mx-6 flex flex-wrap justify-center gap-4 */}
        {images.map((image) => (
          <Link href={image.href} key={image.id}>
            <Card className="flex flex-col items-center border-none md:basis-[40%] lg:basis-[30%]">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  width={500}
                  height={500}
                  alt={image.alt}
                />
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <span className="font-bold">New Bag!!!</span>
                <span className="text-xs">Blossom</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
