import TeamMember from "./_components/TeamMember"
import TotalCategory from "./_components/TotalCategory"
import TotalProducts from "./_components/TotalProducts"

const DashBoardHome = () => {
    return (
        <div className=" grid grid-cols-1 lg:flex justify-center items-center p-4 gap-4">
            <div className="w-full ">
                <TotalProducts />
            </div>
            <div className=" w-full">
                <TotalCategory />
            </div>
            <div className="w-full">
                <TeamMember />
            </div>
        </div>
    )
}

export default DashBoardHome