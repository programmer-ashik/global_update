import { FaOpencart } from "react-icons/fa";

const TeamMember = () => {
    return (
        <div className=' bg-[#044A42] text-[#f5c667] w-full mx-auto h-[300px] rounded-md space-y-4'>
            <h1 className=" text-xl font-bold p-2 pt-3"> Team Member</h1>
            <div className="flex justify-center items-center w-full cursor-pointer">
                <div className="flex justify-center items-center gap-4 text-2xl hover:scale-105 transition-all duration-700
                text-[#f5c667]
                h-32 w-32 border-2 border-[#f5c667] bg-gray-800 rounded-full">
                    <FaOpencart />
                    <p>12</p>
                </div>
            </div>
            <div className="flex-flex-col gap-4 space-y-2 px-2">
                <h1 className=" text-md font-bold text-[#f5c667]">Last Update: <span className=" text-sm text-slate-50">20-12-2025</span></h1>
                <h1 className=" text-md font-bold text-[#f5c667]">New Member: <span className=" text-sm text-slate-50">20-12-2025</span></h1>
            </div>

        </div>
    )
}

export default TeamMember