import React, {useEffect, useState} from 'react';
import CustomSelect from "../UI/Select/CustomSelect";
import axios from "axios";

const CartForm = ({orderData, setOrderData}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [phone, setPhone] = useState('');

    const [countries, setCountries] = useState([{name: 'Российская Федерация'}]);
    const [countriesSelected, setCountriesSelected] = useState(countries[0]);

    const [regions, setRegions] = useState([{name: 'Выберите регион'}, {name: 'Республика Дагестан'}]);
    const [regionsSelected, setRegionsSelected] = useState(regions[0]);
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');


    useEffect(() => {
        changeOrderField(regionsSelected.name, setOrderData, 'Выберите регион', 'delivery', 'state');
    }, [regionsSelected]);
    useEffect(() => {
        changeOrderField(countriesSelected.name, setOrderData, 'Выберите страну', 'delivery', 'country');
    }, [countriesSelected]);
    useEffect(() => {
        changeOrderField(phone, setOrderData, '', 'customer', 'phone');
    }, [phone]);
    useEffect(() => {
        const splited = orderData.customer.name.split(' ');
        splited[0] = name;
        changeOrderField(splited.join(' '), setOrderData, '', 'customer', 'name');
    }, [name]);
    useEffect(() => {
        const splited = orderData.customer.name.split(' ');
        splited[1] = surName;
        changeOrderField(splited.join(' '), setOrderData, '', 'customer', 'name');
    }, [surName]);
    useEffect(() => {
        changeOrderField(email, setOrderData, '', 'customer', 'email');
    }, [email]);
    useEffect(() => {
        changeOrderField(city, setOrderData, '', 'delivery', 'city');
    }, [city]);
    useEffect(() => {
        changeOrderField(street, setOrderData, '', 'delivery', 'street');
    }, [street]);
    useEffect(() => {
        changeOrderField(house, setOrderData, '', 'delivery', 'house');
    }, [house]);

    function changeOrderField(value, setter, defaultCheck, field, field2,) {
        const newValue = value !== defaultCheck ? value : '';
        setter(prev => {
            const newObj = {...prev};
            field2 ? newObj[field][field2] = value : newObj[field] = value;
            return newObj;
        })
    }

    function sendPostOrder() {
        return async function (event) {
            event.preventDefault();
           await axios.post(process.env.API_URL + "api/orders/order", orderData);
        }
    }

    return (
        <div className="cart__form">
            <form>
                <h2>Оформление</h2>
                <div className="cart__form-wrapper">
                    <div className="cart__form-input-wrapper">
                                    <span className="cart__form-input-title">Имя <span
                                        className="required-symbol">*</span></span>
                        <input name="name" className="main-style-input" type="text" value={name}
                               onChange={event => setName(event.target.value)}/>
                    </div>
                    <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Фамилия <span
                                    className="required-symbol">*</span></span>
                        <input name="surname" className="main-style-input" type="text" value={surName}
                               onChange={event => setSurName(event.target.value)}/>
                    < /div>
                    <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Почта <span
                                    className="required-symbol">*</span></span>
                        <input name="surname" className="main-style-input" type="text" value={email}
                               onChange={event => setEmail(event.target.value)}/>
                    < /div>
                    <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Телефон<span
                                    className="required-symbol">*</span></span>
                        <input name="surname" className="main-style-input" type="text" value={phone}
                               onChange={event => setPhone(event.target.value)}/>
                    < /div>
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
                        <input className="main-style-input" type="text" value={city}
                               onChange={event => setCity(event.target.value)}/>
                    </div>
                    <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Улица<span
                                    className="required-symbol">*</span></span>
                        <input className="main-style-input" type="text" value={street}
                               onChange={event => setStreet(event.target.value)}/>
                    </div>
                    <div className="cart__form-input-wrapper">
                                <span className="cart__form-input-title">Дом<span
                                    className="required-symbol">*</span></span>
                        <input className="main-style-input" type="text" value={house}
                               onChange={event => setHouse(event.target.value)}/>
                    </div>
                    <input onClick={sendPostOrder(event)} className="main-style-button" value="Отправить" type="submit"/>

                </div>
            </form>
        </div>

    );
};

export default CartForm;