import React, {useEffect, useState} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Route, Routes, useLocation, useNavigate} from "react-router";
import Home from "./pages/Home";
import categoriesRequest from "./API/categoriesRequest";
import Catalog from "./pages/Catalog";
import ShipAndPay from "./pages/ShipAndPay";
import NewsAndPromotions from "./pages/NewsAndPromotions";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        location.pathname === '/' && navigate('/home');
        categoriesFetch();
    }, []);

    async function categoriesFetch() {
        const response = await categoriesRequest();
        setCategories(response);

    }

    const renderRoutes = (data) => {
        return data.map(category => {
            const path = category.path;
            return (
                <Route key={path}>
                    <Route
                        path={path}
                        element={<Catalog path={path} category={category}/>} // Замените на ваш компонент
                    >
                        {/* Если есть подкатегории, вызываем рекурсивно */}
                    </Route>
                    {category.subCategories && (
                        renderRoutes(category.subCategories)
                    )}
                </Route>
            );
        });
    };
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                {renderRoutes(categories)}
                <Route path = "/catalog/*" element={<h1>Категория не найдена</h1>}/>
                <Route path="/dostavka-i-oplata" element={<ShipAndPay/>}/>
                <Route path="/novosti-i-akcii" element={<NewsAndPromotions/>}/>
                <Route path="/o-magazine" element={<About/>}/>
                <Route path="/contacti" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/*" element={<h1>Ошибка</h1>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App;