import Link from "next/link"
import { Button } from "@medusajs/ui"
import { Card, CardContent, CardHeader } from "@modules/ui/card"
import { cn } from "@lib/utils"
import Image from "next/image"
import craft from "/public/craftman.jpeg"

export default function AboutCraftmanship({ id }: { id: string }) {
  return (
    <section id={id}>
      <Card className="bg-accent">
        <CardHeader className="py-10 text-center text-xl font-bold">
          About Our Craftmanship
        </CardHeader>
        <CardContent className="mb-4 flex flex-col-reverse gap-2 p-2 px-6 md:flex-row">
          <div className="flex flex-col justify-around gap-4">
            <span className="pe-10 text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quas doloremque unde recusandae voluptate dignissimos placeat
              necessitatibus minus maiores. Sit ullam numquam ad, libero
              nesciunt dolores consequatur obcaecati similique ex?
            </span>
            <Link className={"w-1/3 min-w-fit"} href="/about">
              <Button className="bg-primary">Learn More</Button>
            </Link>
          </div>
          <div className="mb-4 w-full justify-self-center overflow-clip rounded-lg bg-amber-500">
            <Image src={craft} alt="craftman" className="object-cover" />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
