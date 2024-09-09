"use client"
import Link from "next/link"

import React, { JSX, SVGProps, useState } from "react"
import Image from "next/image"
import { DropdownMenu } from "@medusajs/ui"
import { cn } from "@lib/utils"
import { ChevronDownIcon } from "lucide-react"
import Logo from "/public/logo_alt1.png"

const navigationMenuTriggerStyle =
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xl uppercase font-medium font-serif transition-colors hover:underline hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 underline-offset-4 data-[active]:underline data-[state=open]:underline"

export default function NavTiles() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-between gap-2 px-4">
      <Link href="/" className="w-32 md:flex md:w-auto">
        <Image src={Logo} alt="nacaram" width={250} height={250} />

        <span className="sr-only">Nacaram</span>
      </Link>

      <div className="mx-auto hidden gap-6 text-foreground md:flex">
        <ul className="uppercase">
          <Link
            href="/"
            prefetch={false}
            className={navigationMenuTriggerStyle}
          >
            Home
          </Link>

          <DropdownMenu open={isOpen}>
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <DropdownMenu.Trigger className={navigationMenuTriggerStyle}>
                Products <ChevronDownIcon className="ml-2 h-4 w-4" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="">
                <ul className="grid grid-cols-1 gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  {/* <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/all-products"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <BriefcaseIcon className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        All Products
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Stylish and versatile handbags for every occasion.
                        Beutifull. Customizable.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li> */}
                  <ListItem href="/store" title="All Products">
                    Take a look at all our products.
                  </ListItem>
                  <ListItem href="/collections/totes" title="Totes">
                    Spacious and practical totes for everyday use.
                  </ListItem>
                  <ListItem href="/collections/clutches" title="Clutches">
                    Chic clutches perfect for evening events and parties.
                  </ListItem>
                  <ListItem href="/collections/handbags" title="Handbags">
                    Elegant Handbags combining style and functionality.
                  </ListItem>
                  <ListItem href="/collections/keychains" title="Keychains">
                    Elegant Keychains combining style and functionality.
                  </ListItem>
                </ul>
              </DropdownMenu.Content>
            </div>
          </DropdownMenu>

          <Link
            href="/collections"
            prefetch={false}
            className={navigationMenuTriggerStyle}
          >
            Collections
          </Link>

          <Link
            href="/about"
            prefetch={false}
            className={navigationMenuTriggerStyle}
          >
            About
          </Link>
          {/* 
          <Link
            href="/contact"
            prefetch={false}
            className={navigationMenuTriggerStyle}
          >
            Contact
          </Link> */}
        </ul>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href || "/404"}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"
