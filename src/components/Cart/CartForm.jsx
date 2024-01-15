import React, {useEffect, useState} from 'react';
import CustomSelect from "../UI/Select/CustomSelect";

const CartForm = ({orderData,setOrderData}) => {

    const [countries, setCountries] = useState([{name: 'Российская Федерация'}]);
    const [countriesSelected, setCountriesSelected] = useState(countries[0]);

    const [regions, setRegions] = useState([{name: 'Выберите регион'}, {name: 'Республика Дагестан'}]);
    const [regionsSelected, setRegionsSelected] = useState(regions[0]);

    useEffect(() => {

    }, []);

    return (
        <div className="cart__form">
            <form>
                <h2>Оформление</h2>
                <div className="cart__form-wrapper">
                    <div className="cart__form-input-wrapper">
                                    <span className="cart__form-input-title">Имя <span
                                        className="required-symbol">*</span></span>
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
                                      setSelected={setCountriesSelected} disabled={true}/>
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

                </div>
            </form>
        </div>

    );
};

export default CartForm;