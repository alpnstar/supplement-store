import React, {useEffect, useRef, useState} from 'react';
import './navigation.scss';
import expandSvg from '../../../public/imgs/expand.svg'

const Navigation = ({context}) => {

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
                                                <div className="nav__context-item-wrapper">
                                                    Здоровье
                                                    <img src={expandSvg} alt=""/>

                                                </div>
                                            </li>
                                            <li className="nav__context-item">
                                                <div className="nav__context-item-wrapper">
                                                    Красота
                                                    <img src={expandSvg} alt=""/>
                                                </div>
                                            </li>
                                            <li
                                                onMouseEnter={makeContextHandle(1)}
                                                onMouseLeave={makeContextHandle(1)}
                                                className="nav__context-item">
                                                <div
                                                    className="nav__context-item-wrapper">
                                                    Парфюм
                                                    <img src={expandSvg} alt=""/>
                                                </div>
                                                {contexts[1] && <div className="nav__context nav__context--second">
                                                    <ul>
                                                        <li className="nav__context-item">
                                                            <div className="nav__context-item-wrapper">
                                                                Уход
                                                                <img src={expandSvg} alt=""/>
                                                            </div>
                                                        </li>
                                                        <li className="nav__context-item">
                                                            <div className="nav__context-item-wrapper">
                                                                Макияж
                                                                <img src={expandSvg} alt=""/>
                                                            </div>
                                                        </li>
                                                        <li className="nav__context-item">
                                                            <div className="nav__context-item-wrapper">
                                                                Парфюм
                                                                <img src={expandSvg} alt=""/>
                                                            </div>
                                                        </li>
                                                        <li
                                                            onMouseEnter={makeContextHandle(2)}
                                                            onMouseLeave={makeContextHandle(2)}
                                                            className="nav__context-item">
                                                            <div
                                                                className="nav__context-item-wrapper"
                                                            >
                                                                Для детей
                                                                <img src={expandSvg} alt=""/>
                                                            </div>
                                                            {contexts[2] &&
                                                                <div
                                                                    className="nav__context nav__context--third">
                                                                    <ul>
                                                                        <li className="nav__context-item">
                                                                            <div className="nav__context-item-wrapper">
                                                                                Шампуни
                                                                            </div>
                                                                        </li>
                                                                        <li className="nav__context-item">
                                                                            <div className="nav__context-item-wrapper">
                                                                                Гели для душа
                                                                            </div>
                                                                        </li>
                                                                        <li className="nav__context-item">
                                                                            <div className="nav__context-item-wrapper">
                                                                                Наборы
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>}

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

export default Navigation;