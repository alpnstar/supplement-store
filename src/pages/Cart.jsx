import React, {useState} from 'react';
import CustomSelect from "../components/UI/Select/CustomSelect";
import '../components/Cart/cart.scss';
import cartRemoveImg from '../../public/imgs/cart-remove.svg';

const Cart = () => {

    const [countries, setCountries] = useState(['Выберите страну', 'Российская Федерация']);
    const [countriesSelected, setCountriesSelected] = useState(countries[0]);

    const [regions, setRegions] = useState(['Выберите регион', 'Республика Дагестан']);
    const [regionsSelected, setRegionsSelected] = useState(regions[0]);

    return (<>
            <div className="cart">
                <div className="cart__wrapper container">
                    <div className="cart__cart-content">
                        <h2>Корзина</h2>
                        <div className="cart__goods-list">
                            <div className="cart__goods-item">
                                <div className="cart__goods-item-content-left">
                                    <img className="cart__goods-item-img"
                                         src="https://s3-alpha-sig.figma.com/img/967b/8f3c/72e3f7e22299af60d1a5ce5af2e754f7?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lR7j-5NNNE86K9yGT0sCH0ELbo6RNOilBT~kNDNKfSW31fxyd3gsPDTseBG37HkS~A1R5cTgf6GBEV~XhXL20VBd0413p7jG2OLxNPpo49So2cmut4J9MAazi3W8ErUu~4vwu63cYHnFWcdhHMZ4jsNqeGQUd4tPtgYemHpYQILJuaB0sAwRieS3m83ybDNwTq5gmcCCZmZ7NrU94efmTSQIwSVuL1Xo-fUmJFF~tkyc1KW9ElbcTz2c-cXToP0bX6yDgw2re8bmKDPlUL0FtSre-Iij8yMd0eL4R9ZhCVaeelRUnEqDjBqyALGPHK2jIsfEWuT6IcY-1QThjt62QA__"
                                         alt=""/>
                                    <div className="cart__goods-item-text-content">
                                        <span
                                            className="cart__goods-item-title">ORZAX Ocean B Complex 50 capsules</span>
                                        <span className="cart__goods-item-viewPrice">Розничная цена</span>
                                    </div>
                                </div>
                                <div className="cart__goods-item-content-right">
                                    <div className="cart__goods-item-counter">

                                    </div>
                                    <div className="cart__goods-item-price">
                                        950₽
                                    </div>
                                    <img src={cartRemoveImg} alt="" className="cart__goods-item-deleteImg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart__form">
                        <form method="post" action="">
                            <h2>Оформление</h2>
                            <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Имя <span className="required-symbol">*</span></span>
                                <input name="name" className="main-style-input" type="text"/>
                            </div>
                            <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Фамилия <span
                                    className="required-symbol">*</span></span>
                                <input name="surname" className="main-style-input" type="text"/>
                            </div>
                            <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Страна <span
                                    className="required-symbol">*</span></span>
                                <CustomSelect options={countries} selected={countriesSelected}
                                              setSelected={setCountriesSelected}/>
                            </div>
                            <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Регион <span
                                    className="required-symbol">*</span></span>
                                <CustomSelect options={regions} selected={regionsSelected}
                                              setSelected={setRegionsSelected}/>
                            </div>
                            <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Город <span
                                    className="required-symbol">*</span></span>
                                <input className="main-style-input" type="text"/>
                            </div>
                            <input className="main-style-button" value="Отправить" type="submit"/>
                        </form>
                    </div>

                </div>
            </div>
        </>);
};

export default Cart;