import Title from "../../Hooks/Title";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import ParallaxInfo from "./ParallaxInfo/ParallaxInfo";
import Quote from "./Quote/Quote";
import Support from "./Support/Support";

const Home = () => {
    Title('Home')
    return (
        <div className="flex flex-col">
            <Banner />
            <Support />
            <ParallaxInfo />
            <Featured />
            <Quote />
        </div>
    );
};

export default Home;