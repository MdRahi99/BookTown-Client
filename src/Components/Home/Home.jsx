import Title from "../../Hooks/Title";
import Blogs from "../Blogs/Blogs";
import Banner from "./Banner/Banner";
import ParallaxInfo from "./ParallaxInfo/ParallaxInfo";
import Support from "./Support/Support";

const Home = () => {
    Title('Home')
    return (
        <div className="flex flex-col">
            <Banner />
            <Support />
            <ParallaxInfo />
            <Blogs />
        </div>
    );
};

export default Home;