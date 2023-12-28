import React, {useState} from 'react';
import './navigation.scss';
import expandSvg from '../../../public/imgs/expand.svg'

const Navigation = ({context}) => {
    const [firstContext, setFirstContext] = useState(true);
    const [secondContext, setSecondContext] = useState(false);

    function handleSet() {
        setFirstContext(!firstContext);
    }

    function handleSet2() {
        setSecondContext(!secondContext);
    }
    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <li
                        className={`nav__list-item nav__list-item--expand ${firstContext && `nav__list-item--expand--active`}`}>
                        <div onClick={handleSet} className="nav__list-item-wrapper">
                            Каталог продукции
                            <img className="nav__list-item-expand-img" src={expandSvg} alt=""/>
                        </div>
                        {firstContext &&
                            <div className="nav__context nav__context--first">
                                <ul>
                                    <li className="nav__context-item">
                                        <div onClick={handleSet2} className="nav__context-item-wrapper">
                                            Доставка и оплата
                                            <img src={expandSvg} alt=""/>
                                        </div>
                                        {secondContext && <div className="nav__context nav__context--second">
                                            <ul>
                                                <li className="nav__context-item">
                                                    <div className="nav__context-item-wrapper">
                                                        Доставка и оплата
                                                        <img src={expandSvg} alt=""/>
                                                    </div>
                                                </li>
                                                <li className="nav__context-item">
                                                    <div className="nav__context-item-wrapper">
                                                        Доставка и оплата
                                                        <img src={expandSvg} alt=""/>
                                                    </div>
                                                </li>
                                                <li className="nav__context-item">
                                                    <div className="nav__context-item-wrapper">
                                                        Доставка и оплата
                                                        <img src={expandSvg} alt=""/>
                                                    </div>
                                                </li>
                                                <li className="nav__context-item">
                                                    <div className="nav__context-item-wrapper">
                                                        Доставка и оплата
                                                        <img src={expandSvg} alt=""/>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>}
                                    </li>
                                    <li className="nav__context-item">
                                        <div className="nav__context-item-wrapper">
                                            Доставка и оплата
                                            <img src={expandSvg} alt=""/>
                                        </div>
                                    </li>
                                    <li className="nav__context-item">
                                        <div className="nav__context-item-wrapper">
                                            Доставка и оплата
                                            <img src={expandSvg} alt=""/>
                                        </div>
                                    </li>
                                    <li className="nav__context-item">
                                        <div className="nav__context-item-wrapper">
                                            Доставка и оплата
                                            <img src={expandSvg} alt=""/>
                                        </div>
                                    </li>
                                </ul>
                            </div>}
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