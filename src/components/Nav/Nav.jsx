import React, {useState} from 'react';
import './nav.scss';
import expandSvg from '../../../public/imgs/expand.svg';
import {useLocation, useNavigate} from "react-router";
import NavContext from "./NavContext";

const Nav = ({categories, footer}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [contextState, setContextState] = useState(false);
    const anchor = document.getElementById('nav-expand');

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
                        className={`nav__list-item nav__list-item--expand ${location.pathname.indexOf('catalog') === 1 ? 'nav__list-item--active' : ''}`}>
                        <div
                            className="nav__list-item-wrapper">
                            Каталог продукции
                            {!footer && <img className="nav__list-item-expand-img" src={expandSvg} alt=""/>
                            }
                        </div>
                        <NavContext categories={categories} state={contextState}/>
                    </li>


                    <li className={`nav__list-item ${location.pathname === '/dostavka-i-oplata' ? 'nav__list-item--active' : ''}`}
                        onClick={() => navigate('/dostavka-i-oplata')}>Доставка и оплата
                    </li>
                    <li className={`nav__list-item ${location.pathname === '/novosti-i-akcii' ? 'nav__list-item--active' : ''}`}
                        onClick={() => navigate('/novosti-i-akcii')}>Новости и акции
                    </li>
                    <li className={`nav__list-item ${location.pathname === '/o-magazine' ? 'nav__list-item--active' : ''}`}
                        onClick={() => navigate('/o-magazine')}>О магазине
                    </li>
                    <li className={`nav__list-item ${location.pathname === '/contacti' ? 'nav__list-item--active' : ''}`}
                        onClick={() => navigate('/contacti')}>Контакты
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

