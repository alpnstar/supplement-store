import React, {useState} from 'react';
import './nav.scss';
import expandSvg from '../../../public/imgs/expand.svg'
import {useNavigate} from "react-router";

const Nav = ({context}) => {
    const navigate = useNavigate();

    function makeNavigateHandle(param) {
        return function () {
            navigate(param);
        }
    }

    const [contexts, setContexts] = useState(Array(9).fill(false));

    function makeContextHandle(pos) {
        return function () {
            setContexts((prevState) => {
                const updated = [...prevState];
                updated[pos] = !updated[pos];
                return updated;
            })
        }
    }
    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <li
                        onMouseEnter={makeContextHandle(0)}
                        onMouseLeave={makeContextHandle(0)}
                        className={`nav__list-item nav__list-item--expand ${contexts[0] && `nav__list-item--expand--active`}`}>
                        <div
                            className="nav__list-item-wrapper">
                            Каталог продукции
                            <img className="nav__list-item-expand-img" src={expandSvg} alt=""/>
                        </div>
                        <div className="wrapper">
                            {contexts[0] &&
                                <div
                                    className="nav__context nav__context--first">
                                    <div className="nav__context-wrapper">
                                        <ul>
                                            <li className="nav__context-item">
                                                <div
                                                    onClick={makeNavigateHandle('/catalog/zdorove')}
                                                    className="nav__context-item-wrapper">
                                                    Здоровье
                                                    <img src={expandSvg} alt=""/>

                                                </div>
                                            </li>
                                            <li className="nav__context-item">
                                                <div
                                                    onClick={makeNavigateHandle('/catalog/krasota')}
                                                    className="nav__context-item-wrapper">
                                                    Красота
                                                    <img src={expandSvg} alt=""/>
                                                </div>
                                            </li>
                                            <li
                                                onMouseEnter={makeContextHandle(1)}
                                                onMouseLeave={makeContextHandle(1)}
                                                className="nav__context-item">
                                                <div
                                                    onClick={makeNavigateHandle('/catalog/parfyum')}
                                                    className="nav__context-item-wrapper">
                                                    Парфюм
                                                    <img src={expandSvg} alt=""/>
                                                </div>
                                                {contexts[1] && <div className="nav__context nav__context--second">
                                                    <ul>
                                                        <li className="nav__context-item">
                                                            <div
                                                                onClick={makeNavigateHandle('/catalog/parfyum/turetskie')}
                                                                className="nav__context-item-wrapper">
                                                                Турецкий парфюм
                                                                <img src={expandSvg} alt=""/>
                                                            </div>
                                                        </li>
                                                        <li className="nav__context-item">
                                                            <div
                                                                onClick={makeNavigateHandle('/catalog/parfyum/dubayskie')}
                                                                className="nav__context-item-wrapper">
                                                                Дубайский парфюм
                                                                <img src={expandSvg} alt=""/>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>}

                                            </li>

                                        </ul>
                                    </div>
                                </div>}

                        </div>
                    </li>


                    <li className="nav__list-item">Доставка и оплата</li>
                    <li className="nav__list-item">Новости и акции</li>
                    <li className="nav__list-item">О магазине</li>
                    <li className="nav__list-item">Контакты</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;