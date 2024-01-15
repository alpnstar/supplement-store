import React, {useEffect, useState} from 'react';
import CustomSelect from "../components/UI/Select/CustomSelect";
import '../components/Cart/cart.scss';
import cartRemoveImg from '../../public/imgs/cart-remove.svg';
import CartGoodsList from "../components/Cart/CartGoodsList";
import CartForm from "../components/Cart/CartForm";

const Cart = ({setCartTotalCount, cartTotalPrice, setCartTotalPrice}) => {

    const [cartItems, setCartItems] = useState([]);
    const [orderData, setOrderData] = useState({
        note: 'Note123',
        payment_method: 'cash',
        customer: {
            name: "",
            phone: "",
            email: ""
        },
        delivery: {
            country: '',
            state: '',
            city: '',
            street: '',
            house: '',
        },
        goods: [],
    });
    useEffect(() => {
        console.log(orderData)
    }, [orderData]);

    function getCartItems() {
        return JSON.parse(localStorage.getItem('cartElements'));
    }

    useEffect(() => {
        cartItems.map(item => {
            setOrderData(prev => {
                return {
                    ...prev,
                    goods: [
                        ...prev.goods,
                        {
                            product_id: item.product.id,
                            quantity: item.details.quantity,
                            is_bulk: item.details.is_bulk,
                        }]
                }
            })
        })
    }, [cartItems]);
    useEffect(() => {
        const items = getCartItems();
        items && setCartItems(items) && setCartTotalCount(items.length);
    }, []);


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
                <CartForm orderData={orderData} setOrderData={setOrderData}/>
            </div>
        </div>)
};

export default Cart;


/*{
    "note": "Привезите до 20:00",
    "payment_method": "cash",
    "customer": {
        "name": "Джамал",
        "phone": "+7 989 870 72 17",
        "email": "jamal.absalimov@yandex.ru"
    },
    "delivery": {
        "country": "Россия",
        "state": "Республика Дагестан",
        "city": "Хасавюрт",
        "street": "Грозненская 100A",
        "house": "подъезд 6кв этаж 6"
    },
    "goods": [
        {
            "product_id": "odit-et-modi-deleniti",
            "quantity": 1,
            "is_bulk": false
        },
        {
            "product_id": "exercitationem-rerum-doloremque-quis",
            "quantity": 2,
            "is_bulk": true

        }
    ]
}*/