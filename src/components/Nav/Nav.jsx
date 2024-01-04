import React, {useEffect, useState} from 'react';
import './nav.scss';
import expandSvg from '../../../public/imgs/expand.svg';
import {useNavigate} from "react-router";
import categoriesRequest from "../../API/categoriesRequest";
import NavContext from "./NavContext";

const Nav = () => {
    const navigate = useNavigate();
    const [contextState, setContextState] = useState(false);
    const [categories, setCategories] = useState([]);

    async function categoriesFetch() {
        const response = await categoriesRequest();
        setCategories(response);
    }


    useEffect(() => {
        categoriesFetch();
    }, []);
    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <li
                        onClick={() => setContextState(false)}
                        onMouseEnter={() => setContextState(true)}
                        onMouseLeave={() => setContextState(false)}
                        className='nav__list-item nav__list-item--expand'>
                        <div
                            className="nav__list-item-wrapper">
                            Каталог продукции
                            <img className="nav__list-item-expand-img" src={expandSvg} alt=""/>
                        </div>
                        <NavContext data={categories} state={contextState}/>
                    </li>


                    <li className="nav__list-item" onClick={() => navigate('/dostavka-i-oplata')}>Доставка и оплата
                    </li>
                    <li className="nav__list-item" onClick={() => navigate('/novosti-i-akcii')}>Новости и акции</li>
                    <li className="nav__list-item" onClick={() => navigate('/o-magazine')}>О магазине</li>
                    <li className="nav__list-item" onClick={() => navigate('/contacti')}>Контакты</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

