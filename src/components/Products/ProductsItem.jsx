import React, {useState} from 'react';
import starImg from "../../../public/imgs/star.svg";
import resetImg from "../../../public/imgs/reset.svg";
import {useNavigate} from "react-router";
import ProductsItemInner from "./ProductsItemInner";

const ProductsItem = ({data, setCartTotalPrice, setCartTotalCount}) => {
    const [purchaseTypeBulk, setPurchaseTypeBulk] = useState(false);
    const navigate = useNavigate();
    console.log(navigate);

    function handleChangePurchaseType() {
        return function () {
            setPurchaseTypeBulk(!purchaseTypeBulk);
        }

    }

    function handleNavigate() {
        navigate('../'+data.id);
    }

    function addToCart(isBulk) {
        const newItem = {
            id: Math.random(),
            product: {...data},
            details: {
                quantity: 1,
                is_bulk: isBulk,
            }
        }
        const cartItems = getCartElements();
        presenceCheck();
        setPrice();
        localStorage.setItem('cartElements', JSON.stringify(cartItems));


        setCartTotalCount(prev => {
            const newValue = +prev + 1;
            localStorage.setItem('cartTotalCount', newValue);
            return newValue;
        });

        function getCartElements() {
            !localStorage.getItem('cartElements')
            && localStorage.setItem('cartElements', '[]');
            return JSON.parse(localStorage.getItem('cartElements'));
        }

        function presenceCheck() {
            const check = cartItems.findIndex(item => {
                return item.product.id === newItem.product.id
                    && item.details.is_bulk === newItem.details.is_bulk;
            })
            if (check !== -1) {
                const elem = cartItems[check];
                cartItems[check] = {
                    ...elem,
                    details: {
                        ...elem.details,
                        quantity: elem.details.quantity + 1,
                    }
                };
                return;
            }
            cartItems.push(newItem);
        }

        function setPrice() {
            const getPrice = localStorage.getItem('cartTotalPrice');
            !getPrice && localStorage.setItem('cartTotalPrice', '0');
            let parsedPrice = JSON.parse(getPrice);
            parsedPrice = +parsedPrice + data.attributes.price;
            setCartTotalPrice(parsedPrice);
            localStorage.setItem('cartTotalPrice', parsedPrice);

        }

    }

    return (
        <article className="products__item">
            <div onClick={handleNavigate} className="products__item-img-wrapper">
                <img src={data.attributes.image} alt={data.attributes.name}/>
            </div>
            <ProductsItemInner/>
        </article>
    );
};

export default ProductsItem;