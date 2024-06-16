import React from "react";

const Header = () => {
    return (
        <section>
        <header className="bg-gray-800 p-4 text-white ">
            <div className="flex justify-between">
                <div className="flex justify-center space-x-32 flex-grow">
                    <button>HOME</button>
                    <button>STORE</button>
                    <button>ABOUT</button>
                </div>
                <button className="border-2 rounded-lg px-3 border-white" >Cart</button>
            </div>
        </header>

        <div className="bg-gray-500 my-1 px-20 pb-24 pt-1px ">
          <div className="text-center m-t-1 text-[80px] text-white font-serif" >THE GENERICS</div>
        </div>
        </section>
    );
}

export default Header;
