import BrandSection from "../Components/BrandSection";
import Footer from "../Components/Footer";
import HomeBanner from "../Components/HomeBanner";
import HomeBanner2 from "../Components/HomeBanner2";
import HomeClothes from "../Components/HomeClothes";
import HomeShoes from "../Components/HomeShoes";
import HomeWatches from "../Components/HomeWatches";
import MainHeader from "../Components/MainHeader";
import NewCatogory from "../Components/NewCatogoryR";
import OurFeatured from "../Components/OurFeatured";


let Home = () => {
return(
    <div>
    <MainHeader />
    <HomeBanner />
    <BrandSection />
    <NewCatogory />
    <OurFeatured />
    <HomeBanner2 />
    <HomeClothes />
    <HomeWatches />
    <HomeShoes />
    <Footer />
    </div>
);
}

export default Home;