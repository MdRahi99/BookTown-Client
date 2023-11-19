import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useCart from "../../../../../Hooks/useCart";
import CartInfo from "./CartInfo";
import CheckoutInfo from "./CheckoutInfo";

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="p-4 lg:p-10 shadow-2xl rounded-xl bg-white">
            <CheckoutInfo price={price} cart={cart} />
        </div>
    );
};

export default Payment;