import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import Link from "next/link";

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex h-4 cursor-pointer items-center gap-1 underline-offset-4 hover:underline md:hidden">
          <MenuIcon className="inline-flex w-4" />
          <span className="">Menu</span>
          <span className="sr-only">Toggle navigation menu</span>
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <Link href="/" className="mr-6 md:flex" prefetch={false}>
          <Image src="/logo.png" alt="nacaram" width={100} height={100} />
          <span className="sr-only">Nacaram</span>
        </Link>
        <div className="grid gap-2 py-6">
          <Link
            href="/"
            className="flex w-full items-center py-2 text-lg font-semibold underline-offset-4 hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex w-full items-center py-2 text-lg font-semibold underline-offset-4 hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/all-products"
            className="flex w-full items-center py-2 text-lg font-semibold underline-offset-4 hover:underline"
            prefetch={false}
          >
            Products
          </Link>
          <div className="ms-4 flex flex-col gap-2">
            <Link
              href="/shop/Totes"
              className="underline-offset-4 hover:underline"
            >
              Totes
            </Link>
            <Link
              href="/shop/Clutches"
              className="underline-offset-4 hover:underline"
            >
              Clutches
            </Link>
            <Link
              href="/shop/Satchels"
              className="underline-offset-4 hover:underline"
            >
              Satchels
            </Link>
          </div>
          <Link
            href="/contact"
            className="flex w-full items-center py-2 text-lg font-semibold underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
