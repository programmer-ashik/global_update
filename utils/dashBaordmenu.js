import { GrUserAdmin } from "react-icons/gr";
import { MdCategory, MdDashboardCustomize, MdProductionQuantityLimits } from "react-icons/md";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { RiSlideshow2Fill } from "react-icons/ri";
export const dashBoardMenu = [
    {
        id: "1",
        title: "DashBoard",
        path: "/dashboard",
        icon: <MdDashboardCustomize />
    },
    {
        id: "2",
        title: "Admin",
        path: "/dashboard/admin",
        icon: <GrUserAdmin />
    },
    {
        id: "3",
        title: "Products",
        path: "/dashboard/products",
        icon: <MdProductionQuantityLimits />
    },
    {
        id: "4",
        title: "Categories",
        path: "/dashboard/categories",
        icon: <MdCategory />
    },
    {
        id: "5",
        title: "Team Member",
        path: "/dashboard/teamMember",
        icon: <PiMicrosoftTeamsLogoFill />
    },
    {
        id: "6",
        title: "Banner",
        path: "/dashboard/banner",
        icon: <RiSlideshow2Fill />
    },

]