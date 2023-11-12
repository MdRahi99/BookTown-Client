import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useCart from "../../../../../Hooks/useCart";
import CartInfo from "./CartInfo";
import CheckoutInfo from "./CheckoutInfo";
import { useEffect, useState } from "react";

const Payment = () => {
    
    const [productInfo, setProductInfo] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { id } = useParams();
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    useEffect(() => {
        axiosSecure.get(`/carts/${id}`)
            .then((response) => {
                setProductInfo(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    return (
        <div className="grid grid-cols-12 gap-4 p-4 rounded-lg">
            <div className="col-span-12 flex flex-col gap-8 lg:col-span-6 w-full mx-auto p-10 rounded-xl">
                <h1 className="text-xl font-bold text-center border-b-2 border-dotted w-full p-2 mx-auto border-black">Total Price: <span className="text-orange-600">${price}</span></h1>
                <CartInfo productInfo={productInfo} />
            </div>
            <div className="col-span-12 lg:col-span-6 w-full p-10 shadow-2xl rounded-xl bg-white">
                <CheckoutInfo price={price} productInfo={productInfo} />
            </div>
        </div>
    );
};

export default Payment;