import React, {useEffect, useState} from 'react';
import CustomSelect from "../components/UI/Select/CustomSelect";
import '../components/Cart/cart.scss';
import cartRemoveImg from '../../public/imgs/cart-remove.svg';
import CartGoodsList from "../components/Cart/CartGoodsList";
import CartForm from "../components/Cart/CartForm";

const Cart = ({cartItems,setCartItems, cartTotalPrice}) => {
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


    return (
        <div className="cart">
            <div className="cart__wrapper container">
                <div className="cart__cart-content">
                    <h2>Корзина</h2>
                    <CartGoodsList
                        setCartItems={setCartItems}
                        cartItems={cartItems}/>
                    <h2 className="cart__totalPrice">Итого: {cartTotalPrice + ' ₽'}</h2>
                </div>
                <CartForm orderData={orderData} setOrderData={setOrderData} setCartItems = {setCartItems}/>
            </div>
        </div>)
};

export default Cart;