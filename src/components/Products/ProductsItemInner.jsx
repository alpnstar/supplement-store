import React, {useState} from 'react';
import starImg from "../../../public/imgs/star.svg";
import resetImg from "../../../public/imgs/reset.svg";
import {useNavigate} from "react-router";

const ProductsItemInner = ({data, setCartTotalPrice, setCartTotalCount}) => {
    const [purchaseTypeBulk, setPurchaseTypeBulk] = useState(false);
    const navigate = useNavigate();

    function handleChangePurchaseType() {
        return function () {
            setPurchaseTypeBulk(!purchaseTypeBulk);
        }

    }

    function handleNavigate() {
        navigate('../' + data.id);
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

        <div className="products__item-content">
            <div className="products__item-block-1">
                {data.attributes.status === 'sold-out' ?
                    <span
                        className='products__item-availability products__item-availability--sold-out'>Распродано</span>
                    : data.attributes.status === 'coming-soon'
                        ? <span
                            className='products__item-availability products__item-availability--coming-soon'>Скоро<br/> в поступлении</span>
                        : <span
                            className='products__item-availability'>В наличии</span>

                }

                <div className="products__item-reviews">
                    <img src={starImg} alt=""/>
                    {data.attributes.average_rating}/5 ({data.attributes.reviews_count} отзывов)
                </div>
            </div>
            <div className="products__item-block-2">
                <div className="products__item-left-content">
                        <span
                            className="products__item-price">{(purchaseTypeBulk ? data.attributes.bulk_price : data.attributes.price) + '₽'} </span>
                    <div className="products__item-price--prev">
                        <s>{(purchaseTypeBulk ? data.attributes.old_bulk_price : data.attributes.old_price) + '₽'}</s>
                    </div>
                </div>

                <div className="products__item-right-content">
                            <span onClick={handleChangePurchaseType()} className="products__item-wholesale">
                                <img src={resetImg} alt=""/>
                                {purchaseTypeBulk ? 'Роз' : 'Oпт'}
                            </span>
                </div>

            </div>
            <div className="products__item-block-3">
                <h3 className="products__item-title">{data.attributes.name}</h3>
                <div className="products__item-description"
                     dangerouslySetInnerHTML={{__html: data.attributes.description}}></div>
            </div>
            <div className="products__item-push-cart-button">
                <button onClick={() => {
                    addToCart(purchaseTypeBulk);
                }}>
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default ProductsItem;