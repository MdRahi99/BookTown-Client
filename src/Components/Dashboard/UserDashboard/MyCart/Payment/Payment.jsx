import useCart from "../../../../../Hooks/useCart";
import CheckoutInfo from "./CheckoutInfo";
import PaymentInfo from "./PayentInfo";

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="grid grid-cols-12 gap-4 p-4 rounded-lg bg-white">
            <div className="col-span-12 flex flex-col gap-8 lg:col-span-6 w-full mx-auto p-10 shadow-2xl rounded-xl">
                <h1 className="text-xl font-bold text-center border-b-2 border-dotted w-full p-2 mx-auto border-black">Total Price: <span className="text-orange-600">${price}</span></h1>
                {
                    cart.map((productInfo, index) => {
                        return <PaymentInfo 
                        key={productInfo._id} 
                        index={index} 
                        productInfo={productInfo} />
                    })
                }
            </div>
            <div className="col-span-12 lg:col-span-6 w-full p-10 shadow-2xl rounded-xl">
                <CheckoutInfo />
            </div>
        </div>
    );
};

export default Payment;