import Image from "next/image"
import Link from "next/link"


const categories = [
    {
        id: "1",
        name: 'Monitor',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/all-in-one.svg',
    },
    {
        id: "2",
        name: 'Processor',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/Processor.svg',
    },
    {
        id: "3",
        name: 'Camera',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/camera.svg',
    },
    {
        id: "4",
        name: 'Printer',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/printer.svg',
    },
    {
        id: "5",
        name: 'Software',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/software.svg'
    },
    {
        id: "6",
        name: 'Monitor',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/Monitor.svg'
    },
    {
        id: "7",
        name: 'Sound System',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/speaker.svg'
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Categories() {

    return (
        <div className=" bg-primary bg-opacity-30 w-full">
            <main>
                {/* Category section */}
                <section aria-labelledby="category-heading" className="pt-8 sm:pt-8 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                        <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-300">
                            Shop by Category
                        </h2>
                        <Link href="#" className="hidden text-sm font-semibold text-gray-300 hover:text-indigo-500 sm:block">
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>

                    <div className=" my-8 w-full mx-auto grid sm:grid-cols-7 grid-cols-3 gap-4">
                        {
                            categories.map(categorie =>
                                <Link
                                    key={categorie.id}
                                    className=" flex flex-col gap-4 items-center justify-center"
                                    href={'/'}>
                                    <Image width={100} height={100} className=" h-12 w-12  sm:h-20 sm:w-20 hover:case-out hover:shadow-md hover:shadow-white rounded-md hover:bg-gray-200 p-1 bg-gray-400
                                    scale-100 hover:scale-125 duration-700" src={categorie.imageSrc} />
                                    <p className="text-gray-300 ">{categorie.name}</p>

                                </Link>)
                        }
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <Link href="#" className="block text-sm font-semibold text-gray-300 hover:text-indigo-500">
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                </section>
                {/* Featured section */}
            </main>
        </div>
    )
}
