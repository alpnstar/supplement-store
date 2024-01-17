import React from 'react';
import '../components/Home/home.scss'
import Banner from "../components/Home/Banner/Banner";
import PopularGoods from "../components/Home/PopularGoods/PopularGoods";
import NewGoods from "../components/Home/NewGoods/NewGoods";
import RecentNews from "../components/Home/RecentNews/RecentNews";
import LastReviews from "../components/Home/LastReviews/LastReviews";

const Home = ({setCartItems}) => {

    return (
        <div className="home">
            <div className="home__wrapper">
                <Banner/>
                <PopularGoods setCartItems = {setCartItems}
                              />
                <NewGoods setCartItems={setCartItems} />
                <RecentNews/>
                <LastReviews/>
            </div>
        </div>
    );
};

export default Home;