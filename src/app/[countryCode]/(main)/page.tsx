import MustHaves from "@modules/port/home/MustHaves"
import MaxWidthWrapper from "@modules/ui/MaxWidthWrapper"
import HomeFeatured from "@modules/port/home/HomeFeatured"
import HomeCollection from "@modules/port/home/HomeCollection"
import AboutCraftmanship from "@modules/port/home/AboutCraftmanship"
import HomeSideNav from "@modules/layout/components/home-sidenav"

export default async function Home() {
  return (
    <>
      <HomeSideNav />
      <MaxWidthWrapper className="xsmall:py-12">
        <MustHaves id="must-haves" />
        <HomeFeatured id="featured" />
        <HomeCollection id="collection" />
        <AboutCraftmanship id="about" />
        {/* <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul> */}
      </MaxWidthWrapper>
    </>
  )
}
