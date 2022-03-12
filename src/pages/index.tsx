import BannerCard from "@components/common/banner-card";
import HeroWithCategory from "@containers/hero-with-category";
import Container from "@components/ui/container";
import BrandGridBlock from "@containers/brand-grid-block";
import CategoryBlock from "@containers/category-block";
import Layout from "@components/layout/layout";
import CollectionBlock from "@containers/collection-block";
// import BannerWithProducts from "@containers/banner-with-products";
import BannerBlock from "@containers/banner-block";
import BannerGridBlock from "@containers/banner-grid-block";
import Divider from "@components/ui/divider";
// import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
// import Instagram from "@components/common/instagram";
// import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
import FeatureBlock from "@containers/feature-block";
// import ProductsFeatured from "@containers/products-featured";
import BannerSliderBlock from "@containers/banner-slider-block";
// import ExclusiveBlock from "@containers/exclusive-block";
import Subscription from "@components/common/subscription";
// import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import { homeThreeBanner as banner } from "@framework/static/banner";
import { homeThreeMasonryBanner as masonryBanner } from "@framework/static/banner";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
	return (
		<>
			<HeroWithCategory />
			<BannerBlock data={masonryBanner} />
			<Container>
				{/* <ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} /> */}
				<FeatureBlock sectionHeading="text-how-it-works"/>
			</Container>
			<BannerSliderBlock />
			<Container>
				<CategoryBlock sectionHeading="text-shop-by-category" type="rounded" />
				{/* <ProductsFeatured sectionHeading="text-featured-products" /> */}
				<BannerCard
					key={`banner--key${banner[0].id}`}
					banner={banner[0]}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/>
				<CollectionBlock />
				<BannerGridBlock />
				<BrandGridBlock sectionHeading="text-top-brands" />
				<BannerCard
					key={`banner--key${banner[1].id}`}
					banner={banner[1]}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/>
				{/* <BannerWithProducts */}
					{/* sectionHeading="text-on-selling-products" */}
					{/* categorySlug="/search" */}
				{/* /> */}
				{/* <ExclusiveBlock /> */}
				{/* <NewArrivalsProductFeed /> */}
				{/* <DownloadApps /> */}
				<Support />
				{/* <Instagram /> */}
				<Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
			</Container>
			<Divider className="mb-0" />
		</>
	);
}

Home.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
