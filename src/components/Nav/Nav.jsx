import React, {useEffect, useRef, useState} from 'react';
import './nav.scss';
import expandSvg from '../../../public/imgs/expand.svg';
import {useNavigate} from "react-router";
import NavContext from "./NavContext";
import CategoriesRequest from "../../API/categoriesRequest";

const Nav = ({footer}) => {
    const navigate = useNavigate();
    const [contextState, setContextState] = useState(false);
    const [categories, setCategories] = useState([]);
    const ref = useRef();

    async function categoriesFetch() {
        const response = await CategoriesRequest.getAll();
        setCategories(response);
    }

    const anchor = document.getElementById('nav-expand');
    useEffect(() => {
        categoriesFetch();
    }, []);
    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <li
                        id={`${!footer ? 'nav-expand' : ''}`}
                        onClick={() => {
                            if (!footer) setContextState(!contextState);
                            else {
                                window.scrollTo({
                                    top: '0',
                                    behavior: 'smooth',
                                })
                                anchor && anchor.click()
                            }
                        }}
                        onMouseEnter={() => !footer && setContextState(true)}
                        onMouseLeave={() => !footer && setContextState(false)}
                        className='nav__list-item nav__list-item--expand'>
                        <div
                            className="nav__list-item-wrapper">
                            Каталог продукции
                            {!footer && <img className="nav__list-item-expand-img" src={expandSvg} alt=""/>
                            }
                        </div>
                        <NavContext categories={categories.data} state={contextState}/>
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

