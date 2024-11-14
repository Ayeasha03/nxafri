import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './pages/login';
import Home from './pages/home';
import Marketplace from './components/Market/market';
import FullMarketplace from './pages/fullmarket';
import Talent from './components/talentList/TalentList';
import FullTalents from './pages/fulltalentlist';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]); // State for wishlist
  const [cartItems, setCartItems] = useState([]); // State for cart

  // Function to add or remove items from wishlist
  const toggleWishlistItem = (item) => {
    setWishlistItems((prevWishlist) => {
      if (prevWishlist.includes(item)) {
        return prevWishlist.filter((wishlistItem) => wishlistItem !== item); // Remove item if it's already in wishlist
      }
      return [...prevWishlist, item]; // Add item to wishlist
    });
  };

  // Function to add items to cart
  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        wishlistCount={wishlistItems.length} // Pass wishlistCount here
        cartCount={cartItems.length}        // Pass cartCount here

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
                  toggleWishlistItem={toggleWishlistItem}
                  addToCart={addToCart}
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
      </Routes>
    </Router>
  );
}
export default App;