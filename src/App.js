import React,{useState} from "react";
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import CartPage from "./components/Cart/CartPage";
import { MusicProvider } from "./Store/cart-context";
function App() {
  const[click,setClick]=useState(false)
  const onOpen = ()=>{
    setClick(true)
  }
  const onClose = ()=>{
    setClick(false)
  }

  return (
    <MusicProvider>
       <Header onClick = {onOpen} />
       <ProductPage onClick={onOpen}/>
       <Footer />
      {click &&  <CartPage onClick={onClose} />}    
      </MusicProvider>
 )
 

}

export default App;
