import React, {useEffect, useState} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Home/Banner/Banner";
import PopularGoods from "./components/Home/PopularGoods/PopularGoods";
import NewGoods from "./components/Home/NewGoods/NewGoods";
import productsRequest from "./API/productsRequest";
import HomeNews from "./components/Home/HomeNews/HomeNews";
import LastReviews from "./components/Home/LastReviews/LastReviews";

const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productFetch();
    }, [])

    async function productFetch() {
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
            <LastReviews/>
        </div>
    )
}
export default App;