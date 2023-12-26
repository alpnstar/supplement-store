import React, {useEffect, useState} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Home/Banner/Banner";
import PopularGoods from "./components/Home/PopularGoods/PopularGoods";
import NewGoods from "./components/Home/NewGoods/NewGoods";
import productsRequest from "./API/productsRequest";
import NewsAndPromotionsList from "./components/NewsAndPromotions/NewsAndPromotionsList";
import HomeNews from "./components/Home/HomeNews/HomeNews";

const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetching();
    }, [])

    async function fetching() {
        const response = await productsRequest.getAll();
        setProducts(response);
    }
    return (
        <div className='app'>
            <Header/>
            <Navigation/>
            <Banner/>
            <PopularGoods data={products}/>
            <NewGoods data={products}/>
            <HomeNews/>
        </div>
    )
}
export default App;