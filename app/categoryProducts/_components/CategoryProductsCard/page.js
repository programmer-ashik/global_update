import Image from "next/image";
import { BiSolidContact } from "react-icons/bi";
const CategoryProductsCard = ({ productItem }) => {
    const { id, title, description, resolution, regular_price, offer_price, image_url } = productItem
    return (
        <div className=" text-gray-900 bg-white cursor-pointer hover:brightness-105 h-[400px] rounded-md pb-2">
            <Image
                src={productItem.image_url}
                alt={productItem.title}
                width={100}
                height={100}
                className=" w-[200px] mx-auto pt-4"
            />
            <div className="flex flex-col p-2 space-y-2">
                <h1 className=" text-primary font-semibold">{title}</h1>
                <p className=" text-gary-900">{description.slice(0, 40)}</p>
                <p className=" text-black"> Resulations: <span className="text-hero_p">{resolution}</span></p>
            </div>
            <hr />
            <div className="flex justify-center gap-4 items-center w-full h-[60px] px-2">
                <button className=" w-full flex justify-center items-center gap-2 px-1 py-1
             hover:bg-orange-400 hover:border-none hover:text-white hover:duration-700 transition-colors
                rounded-md border-primary border-2 tracking-wide">
                    <BiSolidContact className=" text-2xl hover:text-white" />
                    Conatct Us
                </button>

            </div>
        </div>
    )
}

export default CategoryProductsCard