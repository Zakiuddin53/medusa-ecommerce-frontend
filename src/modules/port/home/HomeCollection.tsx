import { Card, CardContent, CardFooter } from "@modules/ui/card"
import E1 from "/public/images/E1.jpg"
import B1 from "/public/images/blossomClutch1.2.jpg"
import B2 from "/public/images/blossomClutch2.jpg"
import C3 from "/public/images/C3.jpg"
import C4 from "/public/images/C4.jpg"
import acc from "/public/images/acc1.2.jpg"
import S3 from "/public/images/S3.jpg"
import T1 from "/public/images/T1.jpg"
import Image from "next/image"

const images = [
  { id: 1, src: E1, alt: "image" },
  { id: 2, src: B1, alt: "image" },
  { id: 3, src: B2, alt: "image" },
  { id: 4, src: C3, alt: "image" },
  { id: 5, src: C4, alt: "image" },
  { id: 6, src: acc, alt: "image" },
  { id: 7, src: S3, alt: "image" },
  { id: 8, src: T1, alt: "image" },
]

export default function HomeCollection({ id }: { id: string }) {
  return (
    <section id={id} className="mx-6 flex flex-col">
      <div className="my-10 h-5 border-b-2 border-zinc-200 text-center text-2xl">
        <span className="bg-white px-5 font-serif font-semibold">
          Collections
        </span>
      </div>
      <div className="mx-6 flex flex-wrap justify-center gap-4">
        {/* grid-cols-2 justify-center gap-8 md:grid-cols-3 lg:grid-cols-3 */}
        {images.map((image) => (
          <Card
            className="w-full shrink-0 border-none basis-[45%] md:basis-[30%] lg:basis-[22%]"
            key={image.id}
          >
            <CardContent className="h-500 p-0">
              <Image
                className="mx-auto"
                src={image.src}
                width={500}
                height={500}
                alt={image.alt}
              />
            </CardContent>
            <CardFooter className="justify-center p-0 py-2 text-xs font-bold">
              Sale Bags
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
