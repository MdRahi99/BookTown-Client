import { Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";
import AllCategories from "../../Components/Shared/AllCategories/AllCategories";

const ShopLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex gap-3 w-11/12 mx-auto my-12">
                <div className="hidden lg:flex flex-none w-full lg:w-3/12 h-full">
                    <AllCategories></AllCategories>
                </div>
                <div className="flex-1 w-full lg:w-9/12 h-full">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShopLayout;