import { CheckCheckIcon, HeartIcon, InfoIcon, StarIcon } from "lucide-react"

const SideNavItems = [
  { label: "Must Haves", href: "#must-haves", icon: <CheckCheckIcon /> },
  { label: "Featured", href: "#featured", icon: <StarIcon /> },
  { label: "For You", href: "#collection", icon: <HeartIcon /> },
  { label: "About", href: "#about", icon: <InfoIcon /> },
]

type SideNavItem = {
  label: string
  href: string
  icon: React.ReactNode
}

const HomeSideNav = () => {
  return (
    <div className="fixed end-2 z-50 hidden rounded-3xl bg-red-900/20 backdrop-blur-sm transition-all lg:block">
      <ul className="group/bar flex w-14 flex-col items-end overflow-hidden px-4 py-4 underline-offset-4 transition-all duration-300 hover:w-32">
        {SideNavItems.map((item) => (
          <SideLink href={item.href} key={item.href} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default HomeSideNav

const SideLink = ({ href, item }: { href: string; item: SideNavItem }) => {
  return (
    <li className="group relative mb-1">
      <a href={href} className="realtive pb-1 hover:text-ui-fg-base">
        <span className="opacity-100 transition-all duration-700 group-hover/bar:absolute group-hover/bar:opacity-0 group-hover/bar:transition-none">
          {item.icon}
        </span>
        <span className="absolute h-6 whitespace-nowrap opacity-0 group-hover/bar:relative group-hover/bar:opacity-100 group-hover/bar:transition-all group-hover/bar:duration-700">
          {item.label}
        </span>
        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-ui-fg-subtle transition-transform duration-300 group-hover:scale-x-100"></span>
      </a>
    </li>
  )
}
