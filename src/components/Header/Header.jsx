import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div className="logo header__block-1">
                    Site
                </div>
                <div className="header__block-2">
                    <div className="header__search">
                        <input type="text"/>
                    </div>
                    <div className="header__contacts">
                            <span className='header__contacts-element'>
                                <a title='telegram' href="#">
                                    <img src="./images/telegram.svg" alt=""/>
                                </a>
                            </span>
                        <span className='header__contacts-element'>
                                <a title='whatsapp' href="#">
                                    <img src="./images/whatsapp.svg" alt=""/>
                                </a>
                            </span>
                        <span className='header__contacts-element'>
                                <a href="tel:+8800500-50-50">8&nbsp;800&nbsp;500-50-50</a>
                            </span>
                    </div>
                    <div className="header__cart">
                        <div className="header__cart-image">
                            <img src="./images/cart.svg" alt=""/>
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