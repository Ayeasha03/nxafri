import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './pages/login';
import Home from './pages/home';
import Marketplace from './components/Market/market';
import FullMarketplace from './pages/fullmarket';
import Talent from './components/talentList/TalentList';
import FullTalents from './pages/fulltalentlist';
import Cart from './CartContext/cart';
import Checkout from './CartContext/checkout';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]); 


  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  
  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        cartItems={cartItems}
        
      />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" replace />}
        />
        <Route
          path="/marketplace"
          element={
            isLoggedIn
              ? <Marketplace
                  handleAddToCart={handleAddToCart}
                />
              : <Navigate to="/" replace />
          }
        />
        <Route
          path="/full-marketplace"
          element={isLoggedIn ? <FullMarketplace /> : <Navigate to="/" replace />}
        />
        <Route
          path="/talent"
          element={isLoggedIn ? <Talent /> : <Navigate to="/" replace />}
        />
        <Route
          path="/full-discover-talent"
          element={isLoggedIn ? <FullTalents /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/cart' 
        element={<Cart 
        cartItems={cartItems}/>} />
        <Route path='/checkout' 
        element={<Checkout
        cartItems={cartItems}/>} />
      </Routes>
    </Router>
  );
}
export default App;