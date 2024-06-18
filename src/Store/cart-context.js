import React, { useState } from "react";

const MusicContext = React.createContext({
    cartItems: [],
    addCartItem: () => {}
});

export const MusicProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (item) => {
        setCartItems((prevState) => [...prevState, item]);
    };

    return (
        <MusicContext.Provider value={{ cartItems, addCartItem }}>
            {props.children}
        </MusicContext.Provider>
    );
};

export default MusicContext;
