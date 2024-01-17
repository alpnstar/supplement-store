import React from 'react';
import './header.scss';
import telegramImg from '../../../public/imgs/telegram.svg';
import whatsappImg from '../../../public/imgs/whatsapp.svg';
import cartImg from '../../../public/imgs/cart.svg';
import {useNavigate} from "react-router";

const Header = ({cartTotalPrice, cartTotalCount}) => {
    const navigate = useNavigate();

    function homeNavigate() {
        navigate('/home')
    }

    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div
                    onClick={homeNavigate}
                    className="logo header__block-1">
                    Mekka Shop
                </div>
                <div className="header__block-2">
                    <div className="header__search">
                        <input placeholder="Введите название или артикул" type="text"/>
                    </div>
                    <div className="header__contacts">
                        <a title='telegram' href="https://telegram.me/ShiffaVit" target="_blank">
                            <span className='second-style-button'>
                                    <img src={telegramImg} alt=""/>
                            </span>
                        </a>
                        <a title='whatsapp'
                           href="https://api.whatsapp.com/send/?phone=%2B79887212020&text&type=phone_number&app_absent=0"
                           target="_blank">
                            <span className='second-style-button'>
                                <img src={whatsappImg} alt=""/>
                            </span>
                        </a>
                        <a href="tel:+8800500-50-50">
                        <span className='second-style-button'>
                            8&nbsp;800&nbsp;500-50-50
                            </span>
                        </a>
                    </div>
                    <div onClick={() => navigate('/cart')} className="header__cart">
                        <div className="header__cart-image">
                            <img src={cartImg} alt=""/>
                            <div className='header__cart-amount'>{cartTotalCount}</div>
                        </div>
                        <div className="header__cart-content">
                                <span className="header__cart-title">
                                    Корзина
                                </span>
                            <span className="header__cart-sum">
                                {cartTotalPrice + ' ₽'}
                                </span>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
};

export default Header;