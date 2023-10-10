import Title from "../../Hooks/Title";
import Blogs from "../Blogs/Blogs";
import Banner from "./Banner/Banner";
import Support from "./Support/Support";

const Home = () => {
    Title('Home')
    return (
        <div className="flex flex-col gap-12">
            <Banner></Banner>
            <Support></Support>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;