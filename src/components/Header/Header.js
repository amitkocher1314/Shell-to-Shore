import React from "react";

const Header = (props) => {
    return (
        <>
        <header className="fixed top-0 left-0 w-full bg-gray-800 p-[17px] text-white ">
            <div className="flex justify-between">
                <div className="flex justify-center space-x-32 flex-grow">
                    <button>HOME</button>
                    <button>STORE</button>
                    <button>ABOUT</button>
                </div>
                <button onClick={props.onClick} className="border-2 rounded-lg px-3 border-white" >Cart</button>
            </div>
        </header>

        <div className="bg-gray-500 my-16 px-20 pb-24 pt-1px ">
          <div className="text-center m-t-1 text-[80px] text-white font-serif" >The Harmony Express</div>
        </div>
        </>
    );
}

export default Header;
