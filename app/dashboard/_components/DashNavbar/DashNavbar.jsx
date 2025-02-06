import { dashBoardMenu } from "@/utils/dashBaordmenu";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
const DashNavbar = () => {
    const dashMenu = dashBoardMenu;

    return (
        <div className="flex flex-col items-start gap-4">
            {
                dashMenu.map((menu) => <Link key={menu.id} href={menu.path}
                    className=" flex justify-start gap-4 items-center
                     px-3 py-2 
                    "
                >
                    <span className=" text-3xl hover:text-white"> {menu.icon}</span>
                    <p className=" hidden sm:flex text-md text-[#D8E9A8] hover:text-white">{menu.title}</p>
                </Link>
                )
            }
            <div className=" space-y-3">

                <button className="w-full flex justify-start gap-4 items-center
                      px-3 py-2">
                    <IoIosLogOut className=" text-3xl hover:text-white" />
                    <p className=" hidden sm:flex text-md text-[#D8E9A8] hover:text-white"> Log Out</p>

                </button>

            </div>
        </div>
    )
}

export default DashNavbar