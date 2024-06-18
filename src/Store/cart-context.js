import React, { useState } from "react";

const MusicContext = React.createContext({
    cartItems: [],
    addCartItem: () => {},
    removeCartItem: () => {}
});

export const MusicProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (item) => {
        setCartItems((prevState) => {
            const existingItemIndex = prevState.findIndex(cartItem => cartItem.title === item.title);
            if (existingItemIndex >= 0) {
                const updatedCartItems = [...prevState];
                updatedCartItems[existingItemIndex] = {
                    ...updatedCartItems[existingItemIndex],
                    quantity: updatedCartItems[existingItemIndex].quantity + 1
                };
                return updatedCartItems;
            } else {
                return [...prevState, { ...item, quantity: 1 }];
            }
        });
    };

    const removeCartItem = (title) => {
        setCartItems((prevState) => {
            const existingItemIndex = prevState.findIndex(cartItem => cartItem.title === title);
            if (existingItemIndex >= 0) {
                const updatedCartItems = [...prevState];
                if (updatedCartItems[existingItemIndex].quantity === 1) {
                    updatedCartItems.splice(existingItemIndex, 1);
                } else {
                    updatedCartItems[existingItemIndex] = {
                        ...updatedCartItems[existingItemIndex],
                        quantity: updatedCartItems[existingItemIndex].quantity - 1
                    };
                }
                return updatedCartItems;
            }
            return prevState;
        });
    };

    return (
        <MusicContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
            {props.children}
        </MusicContext.Provider>
    );
};

export default MusicContext;
