import { Link } from "react-router-dom";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook"
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram"
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin"

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 font-wallPoet border-dashed border-t-2 w-full lg:w-11/12 mx-auto mt-6 border-black rounded-2xl">
            <div class="grid grid-flow-col gap-4 text-md uppercase">
                <Link className="border-x-2 border-black px-3 py-1 rounded-xl hover:bg-black hover:text-white" to='/about' class="link link-hover">About us</Link>
                <Link className="border-x-2 border-black px-3 py-1 rounded-xl hover:bg-black hover:text-white" to='/contact' class="link link-hover">Contact</Link>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4 text-3xl">
                    <FaFacebook className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaFacebook>
                    <FaInstagram className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaInstagram>
                    <FaLinkedin className="hover:p-1 hover:bg-black hover:text-white hover:animate-pulse"></FaLinkedin>
                </div>
            </div>
            <div className="text-md">
                <p>Copyright © 2023 - All right reserved by <span className="font-bold">Book Town</span></p>
            </div>
        </footer>
    );
};

export default Footer;