import Banner from "./Banner/Banner";
import BuyKids from "./BuyKids/BuyKids";
import Gallery from "./Gallery/Gallery";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <BuyKids></BuyKids>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;