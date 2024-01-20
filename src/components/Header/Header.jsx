import React, {useEffect, useState} from 'react';
import './header.scss';
import telegramImg from '../../../public/imgs/telegram.svg';
import whatsappImg from '../../../public/imgs/whatsapp.svg';
import cartImg from '../../../public/imgs/cart.svg';
import contactsImg from '../../../public/imgs/contacts.svg'
import {useNavigate} from "react-router";
import HeaderSearch from "./HeaderSearch";
import MobileMenu from "./MobileMenu/MobileMenu";
import Nav from "./Nav/Nav";

const Header = ({categories, cartTotalPrice, cartTotalCount}) => {
    console.log(categories)
    const navigate = useNavigate();
    const [burgerOpened, setBurgerOpened] = useState(false);
    const [contactsOpened, setContactsOpened] = useState(false);

    function homeNavigate() {
        navigate('/home')
    }





    function handleNavigate(arg, setState) {
        return function () {
            setState(false);
            navigate(arg);
        }
    }

    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div className="header__main">
                    <div
                        onClick={homeNavigate}
                        className="logo header__block-1">
                        Mekka Shop
                    </div>
                    <div className="header__block-2">
                        <HeaderSearch/>
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
                        <div className="header__contactsMobile" onClick={() => setContactsOpened(!contactsOpened)}>
                            <img src={contactsImg} alt="Contacts"/>
                        </div>
                        {contactsOpened &&
                            <MobileMenu title={'Контакты'} state={contactsOpened} setState={setContactsOpened}>
                                <li className="mobileMenu__list-item--first">
                                <span className="mobileMenu__list-item-title">
                                    <a href="tel:+8800500-50-50">
                                    8&nbsp;800&nbsp;500-50-50
                                </a>
                                </span>
                                </li>
                                <li className="mobileMenu__list-item">
                               <span className="mobileMenu__list-item-title">
                                   <a
                                       href="https://api.whatsapp.com/send/?phone=%2B79887212020&text&type=phone_number&app_absent=0">Написать
                                    в WhatsApp</a>
                               </span>
                                </li>
                                <li className="mobileMenu__list-item">
                                <span className="mobileMenu__list-item-title">
                                    <a href="https://telegram.me/ShiffaVit">Написать в Telegram</a>
                                </span>
                                </li>
                            </MobileMenu>
                        }
                        <div onClick={() => navigate('/cart')} className="header__cart">
                            <div className="header__cart-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <path
                                        d="M14.1666 15C13.2416 15 12.5 15.7417 12.5 16.6667C12.5 17.1087 12.6756 17.5326 12.9881 17.8452C13.3007 18.1577 13.7246 18.3333 14.1666 18.3333C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667C15.8333 16.2246 15.6577 15.8007 15.3452 15.4882C15.0326 15.1756 14.6087 15 14.1666 15ZM0.833313 1.66666V3.33333H2.49998L5.49998 9.65833L4.36665 11.7C4.24165 11.9333 4.16665 12.2083 4.16665 12.5C4.16665 12.942 4.34224 13.3659 4.6548 13.6785C4.96736 13.9911 5.39129 14.1667 5.83331 14.1667H15.8333V12.5H6.18331C6.12806 12.5 6.07507 12.478 6.036 12.439C5.99693 12.3999 5.97498 12.3469 5.97498 12.2917C5.97498 12.25 5.98331 12.2167 5.99998 12.1917L6.74998 10.8333H12.9583C13.5833 10.8333 14.1333 10.4833 14.4166 9.975L17.4 4.58333C17.4583 4.45 17.5 4.30833 17.5 4.16666C17.5 3.94565 17.4122 3.73369 17.2559 3.57741C17.0996 3.42113 16.8877 3.33333 16.6666 3.33333H4.34165L3.55831 1.66666M5.83331 15C4.90831 15 4.16665 15.7417 4.16665 16.6667C4.16665 17.1087 4.34224 17.5326 4.6548 17.8452C4.96736 18.1577 5.39129 18.3333 5.83331 18.3333C6.27534 18.3333 6.69926 18.1577 7.01182 17.8452C7.32438 17.5326 7.49998 17.1087 7.49998 16.6667C7.49998 16.2246 7.32438 15.8007 7.01182 15.4882C6.69926 15.1756 6.27534 15 5.83331 15Z"
                                    />
                                </svg>
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
                        <div className="burger" onClick={() => setBurgerOpened(true)}>
                            <span></span><span></span><span></span>
                        </div>
                        {burgerOpened &&
                            <MobileMenu categories={categories} state={burgerOpened} setState={setBurgerOpened}
                                        listTitle={'Каталог продукции'}
                                        title={'Меню'}>
                                <li className="mobileMenu__list-item">
                                <span onClick={handleNavigate('/dostavka-i-oplata', setBurgerOpened)}
                                      className="mobileMenu__list-item-title">Доставка и оплата</span>
                                </li>
                                <li className="mobileMenu__list-item">
                                <span onClick={handleNavigate('/novosti-i-akcii', setBurgerOpened)}
                                      className="mobileMenu__list-item-title">Новости и акции</span>
                                </li>
                                <li className="mobileMenu__list-item">
                                    <span onClick={handleNavigate('/o-magazine', setBurgerOpened)}
                                          className="mobileMenu__list-item-title">О магазине</span>
                                </li>
                                <li className="mobileMenu__list-item">
                                <span onClick={handleNavigate('/contacti', setBurgerOpened)}
                                      className="mobileMenu__list-item-title">Контакты</span>
                                </li>

                            </MobileMenu>}
                    </div>
                </div>
                <Nav categories={categories}/>
            </div>

        </header>

    );
};

export default Header;