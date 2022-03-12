import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { ROUTES } from "@utils/routes";
import { Category } from "@framework/types";
import { useTranslation } from "next-i18next";

interface Props {
	category: Category;
}

const CategoryListCard: React.FC<Props> = ({ category }) => {
	const { slug, name, image,  } = category;
	const { t } = useTranslation("common");
	return (
		
		<Link
			href={{
				pathname: ROUTES.SEARCH,
				query: { category: slug },
			}}
		>
			<a className="flex justify-between items-center bg-gray-200 rounded-md px-5 2xl:px-3.5 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3.5 transition hover:bg-gray-100">
				<div className="flex items-center">
					

					<div className="inline-flex flex-shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto">
						<Image
							src={image?.original ?? "/assets/placeholder/category-small.svg"}
							alt={name || t("text-category-thumbnail")}
							width={100}
							height={60}
							className="bg-gray-300 object-cover "
						/>
							<Image
							src={image?.original ?? "/assets/placeholder/category-small.svg"}
							alt={name || t("text-category-thumbnail")}
							width={100}
							height={60}
							className="bg-gray-300 object-cover "
						/>
							<Image
							src={image?.original ?? "/assets/placeholder/category-small.svg"}
							alt={name || t("text-category-thumbnail")}
							width={100}
							height={60}
							className="bg-gray-300 object-cover "
						/>
						
					</div>

				</div>
			</a>
		</Link>
	);
};

export default CategoryListCard;
