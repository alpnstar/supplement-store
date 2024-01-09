import React, {useEffect, useState} from 'react';
import '../components/Home/home.scss'
import Banner from "../components/Home/Banner/Banner";
import PopularGoods from "../components/Home/PopularGoods/PopularGoods";
import NewGoods from "../components/Home/NewGoods/NewGoods";
import HomeNews from "../components/Home/HomeNews/HomeNews";
import LastReviews from "../components/Home/LastReviews/LastReviews";
import productsRequest from "../API/productsRequest";

const Home = ({products, setCartTotalPrice, setCartTotalCount}) => {

    return (
        <div className="home">
            <div className="home__wrapper">
                <Banner/>
                <PopularGoods setCartTotalCount={setCartTotalCount} setCartTotalPrice={setCartTotalPrice}
                              data={products}/>
                <NewGoods setCartTotalCount={setCartTotalCount} setCartTotalPrice={setCartTotalPrice} data={products}/>
                <HomeNews/>
                <LastReviews/>
            </div>
        </div>
    );
};

export default Home;