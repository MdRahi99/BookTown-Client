import Blogs from "../Blogs/Blogs";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="flex flex-col gap-12">
            <Banner></Banner>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;