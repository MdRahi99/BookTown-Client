import { Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";

const RegisterLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RegisterLayout;