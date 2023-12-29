import React from 'react';
import './header.scss';
import telegramImg from '../../../public/imgs/telegram.svg';
import whatsappImg from '../../../public/imgs/whatsapp.svg';
import cartImg from '../../../public/imgs/cart.svg';
import {useNavigate} from "react-router";

const Header = () => {
    const navigation = useNavigate();

    function homeNavigate() {
        navigation('/home')
    }
    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div
                    onClick={homeNavigate}
                    className="logo header__block-1">
                    Сайт для Саида
                </div>
                <div className="header__block-2">
                    <div className="header__search">
                        <input placeholder="Введите название или артикул" type="text"/>
                    </div>
                    <div className="header__contacts">
                            <span className='header__contacts-element'>
                                <a title='telegram' href="#">
                                    <img src={telegramImg} alt=""/>
                                </a>
                            </span>
                        <span className='header__contacts-element'>
                                <a title='whatsapp' href="#">
                                    <img src={whatsappImg} alt=""/>
                                </a>
                            </span>
                        <span className='header__contacts-element'>
                                <a href="tel:+8800500-50-50">8&nbsp;800&nbsp;500-50-50</a>
                            </span>
                    </div>
                    <div className="header__cart">
                        <div className="header__cart-image">
                            <img src={cartImg} alt=""/>
                            <div className='header__cart-amount'>55</div>
                        </div>
                        <div className="header__cart-content">
                                <span className="header__cart-title">
                                    Корзина
                                </span>
                            <span className="header__cart-sum">
                                    5.000$
                                </span>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
};

export default Header;