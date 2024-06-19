// Header.js
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MusicContext from '../../Store/cart-context';

const Header = (props) => {
  const { cartItems } = useContext(MusicContext);

  return (
    
      <header className="fixed top-0 left-0 w-full bg-gray-800 p-[17px] text-white">
        <div className="flex justify-between">
          <div className="flex justify-center space-x-32 flex-grow">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>
              HOME
            </NavLink>
            <NavLink to="/store" className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>
              STORE
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>
              ABOUT
            </NavLink>
          </div>
          <button onClick={props.onClick} className="border-2 rounded-lg px-3 border-white">
            Cart {cartItems.length}
          </button>
        </div>
      </header>

    
  
  );
};

export default Header;
