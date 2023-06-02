import Blogs from "../Blogs/Blogs";
import AllCategories from "../Shared/AllCategories/AllCategories";
import Banner from "./Banner/Banner";
import Support from "./Support/Support";

const Home = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex lg:flex-row flex-col gap-3">
                <div className="flex-none lg:flex hidden w-1/3">
                    <AllCategories></AllCategories>
                </div>
                <div className="flex-none w-full lg:w-2/3">
                    <Banner></Banner>
                </div>
            </div>
            <Support></Support>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;