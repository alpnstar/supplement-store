import React, {useEffect} from "react";
import "./scss/style.scss";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Route, Routes, useLocation, useNavigate} from "react-router";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        location.pathname === '/' && navigate('/home');
    }, []);
    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/catalog/:category/" element={<Catalog/>}/>
                <Route path="/catalog/:category/:category2" element={<Catalog/>}/>
                <Route path="/*" element={<h1>Ошибка</h1>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App;