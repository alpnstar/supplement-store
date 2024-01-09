import React, {useEffect, useState} from 'react';
import CustomSelect from "../components/UI/Select/CustomSelect";
import '../components/Cart/cart.scss';
import cartRemoveImg from '../../public/imgs/cart-remove.svg';

const Cart = ({setCartTotalCount, cartTotalPrice, setCartTotalPrice}) => {
    const [cartItems, setCartItems] = useState([]);

    function getCartItems() {
        return JSON.parse(localStorage.getItem('cartElements'));
    }

    useEffect(() => {
        const items = getCartItems();
        items && setCartItems(items) && setCartTotalCount(items.length);
    }, []);

    const [countries, setCountries] = useState(['Выберите страну', 'Российская Федерация']);
    const [countriesSelected, setCountriesSelected] = useState(countries[0]);

    const [regions, setRegions] = useState(['Выберите регион', 'Республика Дагестан']);
    const [regionsSelected, setRegionsSelected] = useState(regions[0]);

    return (
        <div className="cart">
            <div className="cart__wrapper container">
                <div className="cart__cart-content">
                    <h2>Корзина</h2>
                    <CartGoodsList
                        setCartTotalPrice={setCartTotalPrice} setCartTotalCount={setCartTotalCount}
                        setCartElements={setCartItems}
                        goods={cartItems}/>
                    <h2 className="cart__totalPrice">Итого: {cartTotalPrice + ' ₽'}</h2>
                </div>
                <div className="cart__form">
                    <form method="post" action="">
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

                        </div>
                    </form>
                </div>

            </div>
        </div>)
};

export default Cart;

const CartGoodsList = ({goods, setCartTotalPrice, setCartElements, setCartTotalCount}) => {
    return (
        <div className="cart__goods-list">
            {goods.length !== 0 ? goods.map(item => <CartGoodsItem
                key={item.product.id}
                goods={goods}
                setCartTotalPrice={setCartTotalPrice}
                setCartTotalCount={setCartTotalCount}
                setCartElements={setCartElements}
                data={item}/>) : <h2 className="cart__goods-empty-title">Корзина пуста</h2>}
        </div>

    )
}
const CartGoodsItem = ({data, goods, setCartElements, setCartTotalCount, setCartTotalPrice}) => {
    const product = data.product;
    const details = data.details;

    function removeItem() {
        const cleanedItems = goods.filter(item => {
            return item.product.id !== data.product.id;
        })
        setCartElements(cleanedItems);
        localStorage.setItem('cartElements', JSON.stringify(cleanedItems));

        setCartTotalCount(() => {
            const newCount = cleanedItems.length;
            localStorage.setItem('cartTotalCount', newCount);
            return newCount;
        });

        setCartTotalPrice(prev => {
            const newPrice = prev - product.attributes.price;
            localStorage.setItem('cartTotalPrice', newPrice);
            return newPrice;
        })

    }

    return (
        <div className="cart__goods-item">
            <div className="cart__goods-item-content-left">
                <img className="cart__goods-item-img"
                     src={product.attributes.image}
                     alt=""/>
                <div className="cart__goods-item-text-content">
                    <span
                        className="cart__goods-item-title">{product.attributes.name}</span>
                    <span
                        className="cart__goods-item-viewPrice">{details.PurchaseType === 'bulk' ? 'Оптовая' : 'Розничная'} цена</span>
                </div>
            </div>
            <div className="cart__goods-item-content-right">
                <div className="cart__goods-item-counter">
                    {details.count}
                </div>
                <div className="cart__goods-item-price">
                    {product.attributes.price} ₽
                </div>
                <img onClick={removeItem} src={cartRemoveImg} alt="" className="cart__goods-item-deleteImg"/>
            </div>
        </div>
    )
}