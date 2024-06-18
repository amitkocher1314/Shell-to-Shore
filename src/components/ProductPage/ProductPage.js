import React, { useContext } from "react";
import MusicContext from "../../Store/cart-context";

const ProductPage = (props) => {
    const { addCartItem } = useContext(MusicContext);

    const products = [
        {
            title: "Black and white Colors",
            image: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            price: 12
        },
        {
            title: "Colors",
            image: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            price: 10
        },
        {
            title: "'Yellow and brown Colors",
            image: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            price: 15
        },
        {
            title: "Yellow and Black Colors",
            image: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            price: 20
        }
    ];

    const addToCartHandler = (product) => {
        addCartItem(product);
    };

    return (
        <>
            <div className="text-center my-8 font-serif text-[30px]">MUSIC</div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-x-24 gap-y-12">
                    {products.map((product,index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h1 className="my-2 font-serif font-bold">{product.title}</h1>
                            <img src={product.image} alt={product.title} className="w-48 h-64 mb-2" />
                            <h4 className="mb-2">${product.price}</h4>
                            <button
                                className="bg-blue-500 text-white py-1 px-4 rounded"
                                onClick={() => addToCartHandler(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center my-8">
                <button onClick={props.onClick} className="px-4 py-2 bg-gray-300 text-blue-600 rounded">
                    See the cart
                </button>
            </div>
        </>
    );
};

export default ProductPage;
