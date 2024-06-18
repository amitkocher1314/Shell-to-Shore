import React, { useContext } from "react";
import MusicContext from "../../Store/cart-context";
import Modal from "../../UI/Modal";

const CartPage = (props) => {
    const { cartItems, removeCartItem } = useContext(MusicContext);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const removeItemHandler = (title) => {
        removeCartItem(title);
    };

    return (
        <Modal onClick={props.onClick}>
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                <button onClick={props.onClick} className="absolute top-4 right-4 text-xl">✖</button>
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="text-lg">Your cart is empty</p>
                        <p className="text-lg">Total Price: $0</p>
                    </div>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex items-center justify-between my-2">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p>Price: ${item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <button 
                                        className="bg-red-500 text-white px-2 py-1 rounded" 
                                        onClick={() => removeItemHandler(item.title)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="text-right mt-4">
                            <p className="text-lg font-bold">Total Price: ${totalAmount}</p>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default CartPage;
