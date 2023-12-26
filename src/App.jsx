import React, {useEffect, useState} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import PopularGoods from "./components/PopularGoods/PopularGoods";
import NewGoods from "./components/NewGoods/NewGoods";
import productsRequest from "./API/productsRequest";

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
        </div>
    )
}
export default App;