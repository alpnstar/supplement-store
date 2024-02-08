import React, {useEffect, useRef, useState} from 'react';
import '../components/Cart/cart.scss';
import CartGoodsList from "../components/Cart/CartGoodsList";
import CartForm from "../components/Cart/CartForm";
import axios from "axios";
import ProductsRequest from "../API/productsRequest";

const Cart = ({cartItems, setCartItems, cartTotalPrice}) => {
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
        document.title = 'Корзина';
    }, []);
    useEffect(() => {
        deletingUnavailable();
    }, []);
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

    async function deletingUnavailable() {
        const newItems = [];
        await checkAvailability();
        setCartItems(newItems);

        async function checkAvailability() {
            for (let i = 0; i <= cartItems.length - 1; i++) {
                try {
                    const response = await ProductsRequest.allProducts.getById(cartItems[i].product.id);
                    const status = response.data.attributes.status;

                    if (status !== 'coming-soon' && status !== 'sold-out') {
                        newItems.push(cartItems[i]);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }


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
                <CartForm orderData={orderData} setOrderData={setOrderData} setCartItems={setCartItems}/>
            </div>
        </div>)
};

export default Cart;