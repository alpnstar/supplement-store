import React, {useEffect, useRef, useState} from 'react';
import './navigation.scss';
import expandSvg from '../../../public/imgs/expand.svg'

const Navigation = ({context}) => {
    const [firstContext, setFirstContext] = useState(false);
    const [secondContext, setSecondContext] = useState(false);
    const [thirdContext, setThirdContext] = useState(false);

    const targetRef = useRef(null);
    const [isClickedOutside, setIsClickedOutside] = useState(false);

    const handleClickOutside = (e) => {
        if (targetRef.current && !targetRef.current.contains(e.target)) {
           handleSetFirstContextFalse();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
    },[])
    function handleSetFirstContextTrue() {
        setFirstContext(true);
    }
    function handleSetFirstContextFalse() {
        setFirstContext(false);
    }

    function handleSetSecondContext() {
        setSecondContext(!secondContext);
    }

    function handleSetThirdContext() {
        setThirdContext(!thirdContext);
    }
    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <li
                        ref={targetRef}
                        onMouseEnter={handleSetFirstContextTrue}

                        className={`nav__list-item nav__list-item--expand ${firstContext && `nav__list-item--expand--active`}`}>
                        <div
                            className="nav__list-item-wrapper">
                            Каталог продукции
                            <img className="nav__list-item-expand-img" src={expandSvg} alt=""/>
                        </div>
                        <div className="wrapper">
                            {firstContext &&
                                <div
                                    onMouseLeave={handleSetFirstContextFalse}
                                    className="nav__context nav__context--first">
                                    <ul>
                                        <li className="nav__context-item">
                                            <div className="nav__context-item-wrapper">
                                                Здоровье
                                                <img src={expandSvg} alt=""/>
                                            </div>
                                            {secondContext && <div className="nav__context nav__context--second">
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
                                                    <li className="nav__context-item">
                                                        <div
                                                            className="nav__context-item-wrapper"
                                                            onMouseEnter={handleSetThirdContext}
                                                            onMouseLeave={handleSetThirdContext}>
                                                            Для детей
                                                            <img src={expandSvg} alt=""/>
                                                        </div>
                                                        {thirdContext &&
                                                            <div className="nav__context nav__context--third">
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
                                        <li className="nav__context-item">
                                            <div className="nav__context-item-wrapper">
                                                Красота
                                                <img src={expandSvg} alt=""/>
                                            </div>
                                        </li>
                                        <li
                                            onMouseEnter={handleSetSecondContext}
                                            onMouseLeave={handleSetSecondContext}
                                            className="nav__context-item">

                                            <div
                                                className="nav__context-item-wrapper">
                                                Парфюм
                                                <img src={expandSvg} alt=""/>
                                            </div>
                                        </li>

                                    </ul>
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