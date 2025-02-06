import { AiFillDelete } from "react-icons/ai"

const bannerSlider = [
    {
        id: '1',
        image: "/bnr3.jpeg",
        name: "Hero Slider"
    },
    {
        id: '2',
        image: "/bnr3.jpeg",
        name: "About"
    },
    {
        id: '3',
        image: "/bnr3.jpeg",
        name: "Future Banner"
    },
]
const BannerTable = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 max-h-screen overflow-y-auto">
            {/* First Section: Categories List */}
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-white">Product Categories</h1>
                    <p className="mt-2 text-sm text-white">
                        A list of all product categories available, along with their details.
                    </p>
                </div>
                <div className="mt-4 bg-indigo-500 hover:bg-indigo-700 rounded-md sm:ml-16 sm:mt-0 sm:flex-none">
                    <button type="button" className="bg-indigo-600 p-2 rounded-md text-white">
                        Add Banner
                    </button>
                </div>
            </div>
            {/* table */}
            <div className="mt-8 flow-root dark:bg-gray-900/80">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                        Banner Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Number of Images
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {bannerSlider.map((show) => (
                                    <tr key={show.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                            {show.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                                            {bannerSlider.length}
                                        </td>
                                        <td className=" flex gap-4 relative whitespace-nowrap py-4 pl-3 text-right text-sm font-medium sm:pr-0">
                                            <a href="#" className="text-indigo-600 text-md hover:text-indigo-900">
                                                Edit
                                            </a>
                                            <a href="#" className="text-red-500 text-xl">
                                                <AiFillDelete />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerTable