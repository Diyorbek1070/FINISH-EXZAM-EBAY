import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Carusel from '../../components/carusel/Carusel';
import Category from '../../components/category/Category';
import HomeFooter from '../../components/footer/HomeFooter';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
const Home = () => {
    return (
        <div>
           <Header/>
           <Search/>
           <Navbar/>
           <Carusel/>
           <Category/>
           <HomeFooter/>
        </div>
    );
}

export default Home;
