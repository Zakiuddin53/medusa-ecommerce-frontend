import React from "react"
import background from "../components/bgimg.jpg"

import { InstagramIcon, FacebookIcon, TwitterIcon, Twitter } from "lucide-react"
import Link from "next/link"
const Footer = () => {
  return (
    <div className="footer bg-header mb-0 mr-0 mt-12 h-2/6 pb-8 pr-0 pt-12 font-extralight">
      <div className="upper justify-around border-b text-center sm:block md:block lg:flex">
        <div className="home-div border-t lg:text-left">
          <FooterLink href="/">HOME</FooterLink>
          <FooterLink href="/about">ABOUT</FooterLink>
          <FooterLink href="/contact">CONTACT</FooterLink>
        </div>
        <div className="privacy border-t lg:text-left">
          <FooterLink href="/shipping">SHIPPING & RETURNS</FooterLink>
          <FooterLink href="/privacy">PRIVACY POLICY</FooterLink>
        </div>
        <div className="subscribe border-t">
          <p className="">Subscribe to our newsletter for Nacaram</p>
          <p>news for promotion</p>
          <form className="mt-10">
            <input
              className="h-10 border-none bg-white p-2 outline-none"
              type="text"
              placeholder="Enter Email Address"
            />
            <button className="h-10 w-12 bg-black text-white">Join</button>
          </form>
        </div>
        <div className="aboutus border-t">
          <FooterLink href="/about">ABOUT US</FooterLink>
          <br />
          <p>
            Lorem ipsum dolor sit amet crm dolorum t <br />
            otam necessitatibus? Dolorem, v <br />
            itae dolores?
          </p>
        </div>
      </div>

      <div className="lower">
        <div className="socialIcons mb-5 mr-3.5 mt-8 flex justify-center gap-4 pb-0 pr-0 pt-8">
          <div className="insta">
            <InstagramIcon />
          </div>
          <div className="fb">
            <FacebookIcon />
          </div>
          <div className="twitter">
            <TwitterIcon />
          </div>
        </div>

        <p className="m-8 text-center">COPYRIGHT @ 2024 Nacaram</p>
      </div>
    </div>
  )
}

export default Footer

const FooterLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href}>
      <p className="underline-offset-4 hover:underline">{children}</p>
    </Link>
  )
}
