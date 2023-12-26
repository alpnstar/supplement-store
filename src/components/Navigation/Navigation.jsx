import React from 'react';
import expandImg from '../../../public/imgs/expand.svg';
import './navigation.scss';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <li className="nav__list-item nav__list-item--expand">Каталог продукции <img src={expandImg}
                                                                                                 alt=""/></li>
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