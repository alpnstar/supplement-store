import React, {useState} from 'react';
import axios from "axios";
import CartFormInput from "./CartFormInput";
import CartFormSelect from "./CartFormSelect";
import {useNavigate} from "react-router";

const CartForm = ({orderData, setOrderData, setCartItems}) => {
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

    function handleChange() {
        return function (value, defaultCheck, field, field2, isFieldName, isSurName) {
            if (!isFieldName) {
                changeOrderField(value, defaultCheck, field, field2);
            } else {
                const splited = orderData.customer.name.split(' ');
                if (isSurName) splited[1] = value;
                else splited[0] = value;
                changeOrderField(splited.join(' '), '', 'customer', 'name');
            }
        }
    }

    function sendPostOrder() {
        return async function (event) {
            event.preventDefault();
            try {
                await axios.post(process.env.API_URL + "orders/order", orderData);
                setErrors({});
                setCartItems([]);
                navigate('/success-order');
            } catch (error) {
                console.log(error)
                setErrors(error.response.data.errors);
            }
        }
    }

    function changeOrderField(value, defaultCheck, field, field2,) {
        const newValue = value !== defaultCheck ? value : '';
        setOrderData(prev => {
            const newObj = {...prev};
            field2 ? newObj[field][field2] = newValue : newObj[field] = newValue;
            return newObj;
        })
    }

    return (
        <div className="cart__form">
            <form>
                <h2>Оформление</h2>
                <div className="cart__form-wrapper">
                    <CartFormInput title={'Имя'} state={name} setState={setName} errors={errors}
                                   errorName={'customer.name'} handleChange={handleChange()} isFieldName={true}
                                   isSurName={false}/>


                    <CartFormInput title={'Фамилия'} state={surName} setState={setSurName} errors={errors}
                                   errorName={'customer.name'} handleChange={handleChange()} isFieldName={true}
                                   isSurName={true}
                    />
                    <CartFormInput title={'Почта'} type={'email'} state={email} setState={setEmail} errors={errors}
                                   errorName={'customer.email'} handleChange={handleChange()} field={'customer'}
                                   field2={'email'}/>
                    <CartFormInput title={'Телефон'} type={'tel'} state={phone} setState={setPhone} errors={errors}
                                   errorName={'customer.phone'} handleChange={handleChange()} field={'customer'}
                                   field2={'phone'}/>
                    <CartFormSelect title={'Страна'} selected={countriesSelected} setSelected={setCountriesSelected}
                                    options={countries} errors={errors} errorName={'delivery.country'}
                                    disabled={true} handleChange={handleChange()} defaultCheck={'Выберите страну'}
                                    field={'delivery'}
                                    field2={'country'}/>
                    <CartFormSelect title={'Регион'} selected={regionsSelected} setSelected={setRegionsSelected}
                                    options={regions} errors={errors} errorName={'delivery.state'}
                                    disabled={true} handleChange={handleChange()} defaultCheck={'Выберите регион'}
                                    field={'delivery'} field2={'state'}/>
                    <CartFormInput title={'Город'} state={city} setState={setCity} errors={errors}
                                   errorName={'delivery.city'} handleChange={handleChange()} field={'delivery'}
                                   field2={'city'}/>
                    <CartFormInput title={'Улица'} state={street} setState={setStreet} errors={errors}
                                   errorName={'delivery.street'} handleChange={handleChange()} field={'delivery'}
                                   field2={'street'}/>
                    <CartFormInput title={'Дом'} state={house} setState={setHouse} errors={errors}
                                   errorName={'delivery.house'} handleChange={handleChange()} field={'delivery'}
                                   field2={'house'}/>
                    <input onClick={sendPostOrder()} className="main-style-button" value="Отправить"
                           type="submit"/>

                </div>
            </form>
        </div>

    );
};

export default CartForm;