import React from 'react';
import './navigation.scss'

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <li className="nav__list-item nav__list-item--expand">Каталог продукции <img src='./images/expand.svg' alt=""/></li>
                    <li className="nav__list-item">Доставка и оплата</li>
                    <li className="nav__list-item">Новости и акции</li>
                    <li className="nav__list-item">О магазине</li>
                    <li className="nav__list-item">Контакты</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;