import React, {useEffect, useState} from 'react';
import '../components/Home/home.scss'
import Banner from "../components/Home/Banner/Banner";
import PopularGoods from "../components/Home/PopularGoods/PopularGoods";
import NewGoods from "../components/Home/NewGoods/NewGoods";
import HomeNews from "../components/Home/HomeNews/HomeNews";
import LastReviews from "../components/Home/LastReviews/LastReviews";
import productsRequest from "../API/productsRequest";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productFetch();
    }, [])

    async function productFetch() {
        const response = await productsRequest.getAll();
        setProducts(response);
    }

    return (
        <div className="home">
            <Banner/>
            <PopularGoods data={products}/>
            <NewGoods data={products}/>
            <HomeNews/>
            <LastReviews/>
        </div>
    );
};

export default Home;