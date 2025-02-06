import Banner from "./components/Banner/Banner"
import Collections from "./components/Collections/Collections"
import FutureCard from "./components/FutureCard/FutureCard"
import TeamSections from "./components/Team/TeamSections"
import Categories from "./components/categories.jsx/Categories"


const Home = () => {
    return (
        <div className=" bg-[url('/wavey-fingerprint.svg')]">
            <Banner />
            <Categories />
            <Collections />
            <FutureCard />
            <TeamSections />
        </div>
    )
}

export default Home