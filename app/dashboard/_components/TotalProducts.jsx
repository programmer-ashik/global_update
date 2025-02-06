import { FaOpencart } from "react-icons/fa";

const TotalProducts = () => {
    return (
        <div className=' bg-[#FEF27A] text-black w-full mx-auto h-[300px] rounded-md space-y-4'>
            <h1 className=" text-xl font-bold p-2 pt-3"> Total Products</h1>
            <div className="flex justify-center items-center w-full cursor-pointer">
                <div className="flex justify-center items-center gap-4 text-2xl hover:scale-105 transition-all duration-700
                text-[#00FFF5]
                h-32 w-32 border-2 bg-gray-800 border-black rounded-full">
                    <FaOpencart />
                    <p>1k</p>
                </div>
            </div>
            <div className="flex-flex-col gap-4 space-y-2 px-2">
                <h1 className=" text-md font-bold text-[#5454C5]">Last Update: <span className=" text-sm text-gray-950">20-12-2025</span></h1>
                <h1 className=" text-md font-blod text-blue-900">New Products: <span className=" text-sm text-gray-950">20-12-2025</span></h1>
            </div>

        </div>
    )
}

export default TotalProducts