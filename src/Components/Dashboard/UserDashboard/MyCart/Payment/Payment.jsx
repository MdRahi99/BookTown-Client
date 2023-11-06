import useCart from "../../../../../Hooks/useCart";

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            {price}
        </div>
    );
};

export default Payment;