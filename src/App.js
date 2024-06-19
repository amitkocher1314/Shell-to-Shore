// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import CartPage from './components/Cart/CartPage';
import AboutPage from './components/AboutPage/AboutPage';
import { MusicProvider } from './Store/cart-context';
import WebsiteName from './components/Header/WebsiteName';

const AppContent= () => {
  const [click, setClick] = useState(false);
  const[displayName,setDisplayName] = useState(true);
  const onOpen = () => {
    setClick(true);
  };

  const onClose = () => {
    setClick(false);
  };
   
  //USING USE LOCATION TO CONDITIONALYY RENDERING WEBSITENAME PAGE
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === "/about"){
    setDisplayName(false)
  }
  else{
    setDisplayName(true)
  }
},[location])


  return (
    
      <MusicProvider>
        <div className='flex flex-col min-h-screen'>
        <Header onClick={onOpen} />
        {displayName && <WebsiteName />}
        
        <Routes>
          {/* Route for ProductPage */}
          <Route path="/store" element={<ProductPage onClick={onOpen} />} />

          {/* Route for AboutPage */}
          <Route path="/about" element={<AboutPage />} />

          {/* Default route (Home) */}
          <Route path="/" element={<ProductPage onClick={onOpen} />} />
        </Routes>

        <Footer />
        {click && <CartPage onClick={onClose} />}
        </div>
      </MusicProvider>
    
  );
}
 const App = ()=>{
  return(
    <Router>
    <AppContent />
    </Router>
  )
 }

export default App;
