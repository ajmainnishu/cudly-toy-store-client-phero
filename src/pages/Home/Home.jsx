import Banner from "./Banner/Banner";
import BuyKids from "./BuyKids/BuyKids";
import Categories from "./Categories/Categories";
import Gallery from "./Gallery/Gallery";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <BuyKids></BuyKids>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;