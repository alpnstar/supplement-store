import React, {useEffect, useState} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Route, Routes, useLocation, useNavigate} from "react-router";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ShipAndPay from "./pages/ShipAndPay";
import NewsAndPromotions from "./pages/NewsAndPromotions";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import CategoriesRequest from "./API/categoriesRequest";
import productsRequest from "./API/productsRequest";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [cartTotalPrice, setCartTotalPrice] = useState(localStorage.getItem('cartTotalPrice') || 0);
    const [cartTotalCount, setCartTotalCount] = useState(localStorage.getItem('cartTotalCount') || 0);

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productFetch();
    }, [])

    useEffect(() => {
        location.pathname === '/' && navigate('/home');
        categoriesFetch();
    }, []);

    async function categoriesFetch() {
        const response = await CategoriesRequest.getAll();
        await setCategories(response.data);

    }

    async function productFetch() {
        const response = await productsRequest.getAll();
        setProducts(response.data);
    }

    const renderRoutes = (data) => {
        return data.map(category => {
            const path = category.attributes.path;
            return (
                <Route key={path}>
                    <Route
                        path={path}
                        element={<Catalog
                            products={products}
                            setCartTotalCount={setCartTotalCount} setCartTotalPrice={setCartTotalPrice}
                            path={path} category={category}/>} // Замените на ваш компонент
                    >
                        {/* Если есть подкатегории, вызываем рекурсивно */}
                    </Route>
                    {category.attributes.subCategories.length !== 0
                        && renderRoutes(category.attributes.subCategories)
                    }
                </Route>
            );
        });
    };
    return (
        <div className='app'>
            <Header cartTotalCount={cartTotalCount} cartTotalPrice={cartTotalPrice}/>
            <Nav/>
            <Routes>
                <Route path="/home"
                       element={<Home
                           products={products}
                           setCartTotalCount={setCartTotalCount}
                           setCartTotalPrice={setCartTotalPrice}/>}/>
                {renderRoutes(categories)}
                <Route path="/catalog/*" element={<h1>Категория не найдена</h1>}/>
                <Route path="/dostavka-i-oplata" element={<ShipAndPay/>}/>
                <Route path="/novosti-i-akcii" element={<NewsAndPromotions/>}/>
                <Route path="/o-magazine" element={<About/>}/>
                <Route path="/contacti" element={<Contacts/>}/>
                <Route path="/cart"
                       element={<Cart
                           cartTotalPrice={cartTotalPrice}
                           setCartTotalCount={setCartTotalCount}
                           setCartTotalPrice={setCartTotalPrice}/>}/>
                <Route path="/*" element={<h1>Ошибка</h1>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App;