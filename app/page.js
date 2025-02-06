import Banner from "./components/Banner/Banner"
import Collections from "./components/Collections/Collections"
import TeamSections from "./components/Team/TeamSections"
import Categories from "./components/categories.jsx/Categories"


const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Collections />
            <TeamSections />
        </div>
    )
}

export default Home