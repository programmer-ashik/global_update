import Banner from "./components/Banner/Banner.jsx";
import Collections from "./components/Collections/Collections.jsx";
import FutureCard from "./components/FutureCard/FutureCard.jsx";
import TeamSections from "./components/Team/TeamSections.jsx";
import Categories from "./components/categories.jsx/Categories.jsx";

export default function Home() {
  return (
    <div className=" max-w-7xl min-h-screen bg-[url('/wavey-fingerprint.svg')] ">
      <Banner />
      <div style={{ backgroundImage: `url('/card.svg')` }} className=" bg-primary bg-cover ">
        <Categories />
        <FutureCard />
      </div>
      <Collections />
      <TeamSections />
    </div>
  );
}
