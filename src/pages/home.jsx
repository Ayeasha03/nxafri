import React from 'react'
import Header from '../components/header/Header';
import Hero from '../components/Hero/Hero';
import Talent from '../components/talentList/TalentList';
import Marketplace from '../components/Market/market';
import Event from '../components/upcoming/upcoming';
import Newsletter from '../components/newsList/NewsList';
import Footer from '../components/Footer/Footer';
import Cart from '../CartContext/cart';
import Checkout from '../CartContext/checkout';

function Home() {
  return (
    <>
    <Hero />
    <Talent />
    <Marketplace />
    {/*<Cart />
    <Checkout />*/}
    <Event />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home