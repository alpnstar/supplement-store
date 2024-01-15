import React, {useEffect, useState} from 'react';
import CustomSelect from "../UI/Select/CustomSelect";
import axios from "axios";
import CartFormInput from "./CartFormInput";
import CartFormSelect from "./CartFormSelect";
import {useNavigate} from "react-router";

const CartForm = ({orderData, setOrderData}) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [phone, setPhone] = useState('');

    const [countries, setCountries] = useState([{name: 'Российская Федерация'}]);
    const [countriesSelected, setCountriesSelected] = useState(countries[0]);

    const [regions, setRegions] = useState([{name: 'Республика Дагестан'}]);
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
            field2 ? newObj[field][field2] = newValue : newObj[field] = newValue;
            return newObj;
        })
    }

    function sendPostOrder() {
        return async function (event) {
            event.preventDefault();
            try {
                await axios.post(process.env.API_URL + "api/orders/order", orderData);
                setErrors({});
                navigate('/success-order');
            } catch (error) {
                console.log(error)
                setErrors(error.response.data.errors);
            }
        }
    }

    return (
        <div className="cart__form">
            <form>
                <h2>Оформление</h2>
                <div className="cart__form-wrapper">
                    <CartFormInput title={'Имя'} state={name} setState={setName} errors={errors}
                                   errorName={'customer.name'}/>
                    <CartFormInput title={'Фамилия'} state={surName} setState={setSurName} errors={errors}
                                   errorName={'customer.name'}/>
                    <CartFormInput title={'Почта'} state={email} setState={setEmail} errors={errors}
                                   errorName={'customer.email'}/>
                    <CartFormInput title={'Телефон'} state={phone} setState={setPhone} errors={errors}
                                   errorName={'customer.phone'}/>
                    <CartFormSelect title={'Страна'} selected={countriesSelected} setSelected={setCountriesSelected}
                                    options={countries} errors={errors} errorName={'delivery.country'}
                                    disabled={true}/>
                    <CartFormSelect title={'Регион'} selected={regionsSelected} setSelected={setRegionsSelected}
                                    options={regions} errors={errors} errorName={'delivery.region'}
                                    disabled={true}/>
                    <CartFormInput title={'Город'} state={city} setState={setCity} errors={errors}
                                   errorName={'delivery.city'}/>
                    <CartFormInput title={'Улица'} state={street} setState={setStreet} errors={errors}
                                   errorName={'delivery.street'}/>
                    <CartFormInput title={'Дом'} state={house} setState={setHouse} errors={errors}
                                   errorName={'delivery.house'}/>
                    <input onClick={sendPostOrder(event)} className="main-style-button" value="Отправить"
                           type="submit"/>

                </div>
            </form>
        </div>

    );
};

export default CartForm;