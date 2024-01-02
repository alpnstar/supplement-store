import React, {useEffect, useState} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Route, Routes, useLocation, useNavigate} from "react-router";
import Home from "./pages/Home";
import categoriesRequest from "./API/categoriesRequest";
import Catalog from "./pages/Catalog";

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
                <>
                    <Route
                        key={path}
                        path={path}
                        element={<Catalog path={path}/>} // Замените на ваш компонент
                    >
                        {/* Если есть подкатегории, вызываем рекурсивно */}
                    </Route>
                    {category.subCategories && (
                        renderRoutes(category.subCategories)
                    )}
                </>
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
                <Route path="/*" element={<h1>Ошибка</h1>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App;