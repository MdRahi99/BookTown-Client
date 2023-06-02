import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex flex-col gap-12 w-11/12 mx-auto my-12">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;