import React from 'react'
import Header from '../components/header/Header';
import Hero from '../components/Hero/Hero';
import Talent from '../components/talentList/TalentList';
import Marketplace from '../components/Market/market';
import Event from '../components/upcoming/upcoming';
import Newsletter from '../components/newsList/NewsList';
import Footer from '../components/Footer/Footer';
import Login from '../pages/login';
{/*import { Link } from "react-router-dom";*/}

function Home() {
  return (
    <>
    <Login />
    <Header />
    <Hero />
    <Talent />
    <Marketplace />
    <Event />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home