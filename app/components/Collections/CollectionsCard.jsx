import { Button } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"


const CollectionsCard = ({ product }) => {

    const { title, id, categories, special_Price, regular_Price, img, reviews } = product || {}

    return (
        <Link href={`/products/${id}`} className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className=" bg-[url('/card3.svg')] w-full sm:w-[250px] flex flex-col rounded-lg bg-cover  text-center shadow">
                <div className=" w-full h-full flex flex-1 flex-col p-2">
                    <div className=" relative h-[200px] w-full mx-auto">
                        <Image
                            fill
                            className="mx-auto w-full flex-shrink-0 object-cover rounded-md
                         hover:scale-105 -inset-20 duration-700
                            "
                            src={img} alt="" />
                    </div>

                    <h3 className="mt-6 text-sm text-black text-wrap font-bold">{title.slice(0, 20)}</h3>
                    <div className="mt-1 flex flex-grow flex-col justify-between">
                        <h1 className="sr-only">Title</h1>
                        <h1 className="text-sm text-gray-900">{categories}</h1>
                        <div className=" flex justify-center items-center gap-2 sm:gap-3">
                            <Button className="rounded font-prompt bg-[#D49B54] py-2 px-4 text-sm text-white data-[hover]:bg-orange-500 data-[hover]:data-[active]:bg-orange-700" >
                                View Details
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </Link>
    )
}

export default CollectionsCard