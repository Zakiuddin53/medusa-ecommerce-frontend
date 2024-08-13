import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <picture>
                <img alt="Logo" src="/naclogo.svg"></img>
              </picture>
            </LocalizedClientLink>
          </div>

          <div className="flex-1 flex justify-center">
            {process.env.FEATURE_SEARCH_ENABLED && (
              <LocalizedClientLink
                href="/search"
                scroll={false}
                data-testid="nav-search-link"
                className="relative flex items-center w-full max-w-md"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 pr-10 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  readOnly
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </LocalizedClientLink>
            )}
          </div>

          {/* Account, Cart, and SideMenu moved to the right */}
          <div className="flex items-center gap-x-6 h-full">
            <div className="flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
