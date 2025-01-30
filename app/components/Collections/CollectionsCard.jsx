import Image from "next/image"
import Link from "next/link"

const CollectionsCard = ({ product }) => {

    const { title, id, categories, special_Price, regular_Price, img, reviews } = product || {}

    return (
        <Link href={`/products/${id}`} className=" w-[190px] h-[320px] bg-primary shadow-lg rounded-md  border-red-400 ring-1 ring-hero">
            <div className=" relative w-[190px] h-[180px] overflow-hidden">
                <Image
                    src={img}
                    fill
                    className=' p-1 rounded-t-md hover:rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105' />
            </div>
            <div className="img h-2/5  px-2 space-y-1 py-2 text-hero_p">
                <h1 className='text-center text-md py-1'>{categories}</h1>
                <h1 className=' text-justify text-sm'>{title.substring(0, 20)}...</h1>
                <div className="flex flex-col justify-center items-center gap-2 py-4">
                    <span className="inline-flex items-center rounded-full bg-primary hover:bg-black px-4 py-2 text-xs font-medium text-hero ring-1 ring-inset ring-white">
                        <span className=" mr-1 text-green-300">Price:</span>  {special_Price} tk
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default CollectionsCard