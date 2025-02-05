import { getProductsByCategory } from "@/app/api/categories/route";
import CategoryProductsCard from "../_components/CategoryProductsCard/page";

const CategoryProducts = async ({ params }) => {
    const products = await getProductsByCategory();
    const filterProducts = products.filter((product) => product.category === params.category)
    return (
        <div className=" bg-[url('/wavey-fingerprint.svg')] py-24 px-12 flex justify-between items-start">
            {
                filterProducts.length > 0 ? <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full min-h-screen ">
                    {
                        filterProducts.map((item) => <CategoryProductsCard key={item.id} productItem={item} />)
                    }
                </div> : <div className=" w-full min-h-screen flex justify-center items-center text-white">
                    Products Not Avalable
                </div>
            }

        </div>
    )
}

export default CategoryProducts