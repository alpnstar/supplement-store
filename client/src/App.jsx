import React, {useEffect, useState} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
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
import ProductsCard from "./components/Products/ProductCard/ProductsCard";
import Error from "./pages/Error";
import SuccessOrder from "./pages/SuccessOrder";
import NewsCard from "./components/NewsAndPromotions/NewsCard";
import SearchFullResult from "./pages/SearchFullResult";
import axios from "axios";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [siteContent, setSiteContent] = useState({});
    const [categories, setCategories] = useState([]);

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartElements')) || []);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [cartTotalCount, setCartTotalCount] = useState(0);

    useEffect(() => {
        localStorage.setItem('cartElements', JSON.stringify(cartItems));
        let totalPrice = 0;
        let totalCount = 0;
        cartItems.map(item => {
            totalPrice = totalPrice + ((item.details.is_bulk ? item.product.attributes.bulk_price : item.product.attributes.price) * item.details.quantity);
            totalCount = totalCount + item.details.quantity;
        })
        setCartTotalPrice(totalPrice);
        setCartTotalCount(totalCount);
    }, [cartItems]);

    useEffect(() => {
        location.pathname === '/' && navigate('/home');
        categoriesFetch();
        siteContentFetch();
    }, []);

    async function categoriesFetch() {
        const response = await CategoriesRequest.getAll();
        await setCategories(response.data);

    }


    async function siteContentFetch() {
        const response = await axios.get(process.env.API_URL + 'settings');
        setSiteContent(response.data.data);

    }

    const renderRoutes = (data) => {
        return data.map(category => {
            const path = category.attributes.path;
            return (
                <Route key={Math.random()}>
                    <Route
                        path={path}
                        element={<Catalog
                            setCartItems={setCartItems}
                            category={category}/>}>
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
            <Header siteContent={siteContent} categories={categories} cartTotalCount={cartTotalCount}
                    cartTotalPrice={cartTotalPrice}/>
            <main className="content">
                <Routes>
                    <Route path="/home"
                           element={<Home setCartItems={setCartItems}/>}/>
                    {renderRoutes(categories)}
                    <Route path="/:productId" element={<ProductsCard
                        setCartItems={setCartItems}/>}/>
                    <Route path="/:productId/:reviews" element={<ProductsCard setCartItems={setCartItems}/>}/>
                    <Route path="/search/:query" element={<SearchFullResult/>}/>
                    <Route path="/blog/:newId" element={<NewsCard/>}/>
                    <Route path="/catalog/*" element={<Error>Категория не найдена</Error>}/>
                    <Route path={"/success-order"} element={<SuccessOrder/>}/>
                    <Route path="/dostavka-i-oplata"
                           element={<ShipAndPay content={siteContent.delivery_and_payment}/>}/>
                    <Route path="/novosti-i-akcii" element={<NewsAndPromotions/>}/>
                    <Route path="/novosti-i-akcii/:newsId" element={<NewsCard/>}/>
                    <Route path="/o-magazine" element={<About content={siteContent.about_shop}/>}/>
                    <Route path="/contacti" element={<Contacts content={siteContent}/>}/>
                    <Route path="/cart"
                           element={<Cart
                               cartTotalPrice={cartTotalPrice}
                               cartItems={cartItems}
                               setCartItems={setCartItems}/>}/>
                    <Route path="/*" element={<Error>Товар не найден</Error>}/>
                    <Route path="/catalog/*" element={<Error>Категория не найдена</Error>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}
export default App;