import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import PopularGoods from "./components/PopularGoods/PopularGoods";

const App = () => {

    return (
        <div className='app'>
            <Header/>
            <Navigation/>
            <Banner/>
            <PopularGoods/>
        </div>
    )
}
export default App;